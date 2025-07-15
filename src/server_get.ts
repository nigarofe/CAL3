import express from "express";
import { Database } from "sqlite3";
import { GET_QUESTIONS_SQL } from "./db_sql_queries.js";
import {
  calculateDaysSinceLastAttempt,
  calculateLatestMemoryIntervalAndPotentialGain,
  calculateAttemptsSummary,
  calculateCellColor,
  STATUS_ERROR,
  STATUS_NA,
} from "./rec_sys.js";

interface QuestionRow {
  question_number: number;
  discipline: string;
  source: string;
  description: string;
  code_vec_json: string;
  date_vec_json: string;
}

interface SpacedRepetitionVariables {
  attempts: { datetime: string; code: number }[];
  DSLA: number | string;
  LaMI: number | string;
  "PMG-D": number | string;
  "PMG-X": number | string;
  total_attempts: number | string;
  memory_attempts: number | string;
  help_attempts: number | string;
  attempts_summary: string;
  "PMG-X_cell_color": string;
}

interface Question {
  number: number;
  proposition: string;
  "step-by-step": string;
  answer: string;
  tags: string[];
  spaced_repetition_variables: SpacedRepetitionVariables;
}

export default function createGetRoutes(db: Database) {
  const router = express.Router();

  router.get("/questions", (req, res) => {
    db.all(GET_QUESTIONS_SQL, (err, rows: QuestionRow[]) => {
      if (err) {
        console.error("Error executing SQL:", err);
        return res.status(500).json({ error: err.message });
      }

      const questions: Question[] = rows.map((row) => {
        const code_vector = JSON.parse(row.code_vec_json);
        const date_vector = JSON.parse(row.date_vec_json);

        let latest_memory_interval: string | number = STATUS_ERROR,
          potential_memory_gain_in_days: string | number = STATUS_ERROR,
          potential_memory_gain_multiplier: string | number = STATUS_ERROR,
          days_since_last_attempt: string | number = STATUS_ERROR,
          attempts_summary: string = STATUS_ERROR;

        if (
          !date_vector ||
          date_vector.length === 0 ||
          date_vector.every((v: string | null) => v == null)
        ) {
          potential_memory_gain_multiplier = STATUS_NA;
          potential_memory_gain_in_days = STATUS_NA;
          latest_memory_interval = STATUS_NA;
          days_since_last_attempt = STATUS_NA;
          attempts_summary = "0;0;0";
        } else {
          const daysSince = calculateDaysSinceLastAttempt(date_vector);
          days_since_last_attempt = daysSince;
          const summary = calculateAttemptsSummary(code_vector);
          attempts_summary = summary;

          ({
            latest_memory_interval,
            potential_memory_gain_multiplier,
            potential_memory_gain_in_days,
          } = calculateLatestMemoryIntervalAndPotentialGain(
            code_vector,
            date_vector,
            daysSince
          ));
        }

        const [total_attempts, memory_attempts, help_attempts] = attempts_summary.split(';').map(s => parseInt(s, 10));

        const question: Question = {
          number: row.question_number,
          proposition: row.description,
          "step-by-step": "", // This will be populated later
          answer: "", // This will be populated later
          tags: [row.discipline, row.source],
          spaced_repetition_variables: {
            attempts: date_vector.map((date: string, index: number) => ({
              datetime: date,
              code: code_vector[index],
            })),
            DSLA: days_since_last_attempt,
            LaMI: latest_memory_interval,
            "PMG-D": potential_memory_gain_in_days,
            "PMG-X": potential_memory_gain_multiplier,
            total_attempts: total_attempts,
            memory_attempts: memory_attempts,
            help_attempts: help_attempts,
            attempts_summary: attempts_summary,
            "PMG-X_cell_color": "", // This will be populated later
          },
        };
        return question;
      });

      const srvs = questions.map(q => q.spaced_repetition_variables)
      calculateCellColor(srvs, "PMG-X");

      res.json(questions);
    });
  });

  return router;
}
