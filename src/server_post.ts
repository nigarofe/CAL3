import express from "express";
import { Database } from "sqlite3";
import {
  CREATE_QUESTION_SQL,
  INSERT_ATTEMPT_SQL,
  UPDATE_QUESTION_SQL,
} from "./db_sql_queries.js";

export default function createPostRoutes(db: Database) {
  const router = express.Router();

  router.post("/questions/create", (req, res) => {
    const {
      discipline,
      source,
      description,
      proposition,
      step_by_step,
      answer,
      tags,
    } = req.body;

    db.run(
      CREATE_QUESTION_SQL,
      [
        discipline,
        source,
        description,
        proposition,
        step_by_step,
        answer,
        JSON.stringify(tags),
      ],
      function (err) {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({
          message: "Question created",
          question_number: this.lastID,
        });
      }
    );
  });

  router.post("/questions/update/:question_number", (req, res) => {
    const { question_number } = req.params;
    const {
      discipline,
      source,
      description,
      proposition,
      step_by_step,
      answer,
      tags,
    } = req.body;

    db.run(
      UPDATE_QUESTION_SQL,
      [
        discipline,
        source,
        description,
        proposition,
        step_by_step,
        answer,
        JSON.stringify(tags),
        question_number,
      ],
      function (err) {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json({ message: "Question updated successfully" });
      }
    );
  });

  router.post("/questions/attempt", (req, res) => {
    const { question_number, code } = req.body;
    db.run(INSERT_ATTEMPT_SQL, [question_number, code], function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({
        message: "Attempt recorded",
        id: this.lastID,
      });
    });
  });

  return router;
}
