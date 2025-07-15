
import express from 'express';
import { Database } from 'sqlite3';
import { GET_QUESTIONS_SQL } from './db_sql_queries.js';
import {
    calculateDaysSinceLastAttempt,
    calculateLatestMemoryIntervalAndPotentialGain,
    calculateAttemptsSummary,
    calculateCellColor
} from './rec_sys.js';

interface QuestionRow {
    question_number: number;
    discipline: string;
    source: string;
    description: string;
    code_vec_json: string;
    date_vec_json: string;
}

export default function createGetRoutes(db: Database) {
    const router = express.Router();

    router.get('/questions', (req, res) => {
        db.all(GET_QUESTIONS_SQL, (err, rows: QuestionRow[]) => {
            if (err) {
                console.error('Error executing SQL:', err)
                return res.status(500).json({ error: err.message });
            }

            const enriched = rows.map(row => {
                const code_vector = JSON.parse(row.code_vec_json);
                const date_vector = JSON.parse(row.date_vec_json);

                let latest_memory_interval: string | number = 'ERROR',
                    potential_memory_gain_in_days: string | number = 'ERROR',
                    potential_memory_gain_multiplier: string | number = 'ERROR',
                    days_since_last_attempt: string | number = 'ERROR',
                    attempts_summary: string = 'ERROR';

                if (!date_vector || date_vector.length === 0 || date_vector.every((v: string | null) => v == null)) {
                    potential_memory_gain_multiplier = 'NA';
                    potential_memory_gain_in_days = 'NA';
                    latest_memory_interval = 'NA';
                    days_since_last_attempt = 'NA';
                    attempts_summary = 'NA';
                } else {
                    const daysSince = calculateDaysSinceLastAttempt(date_vector);
                    days_since_last_attempt = daysSince;
                    attempts_summary = calculateAttemptsSummary(code_vector);

                    ({
                        latest_memory_interval,
                        potential_memory_gain_multiplier,
                        potential_memory_gain_in_days
                    } = calculateLatestMemoryIntervalAndPotentialGain(code_vector, date_vector, daysSince))
                }

                return {
                    // ...row,
                    question_number: row.question_number,
                    discipline: row.discipline,
                    source: row.source,
                    description: row.description,
                    days_since_last_attempt,
                    latest_memory_interval,
                    potential_memory_gain_in_days,
                    potential_memory_gain_multiplier,
                    attempts_summary,
                    date_vector: date_vector
                };
            });

            calculateCellColor(enriched, 'potential_memory_gain_multiplier');

            res.json(enriched);
        });
    });

    return router;
}

