
import express from 'express';
import { Database } from 'sqlite3';
import { CREATE_QUESTION_SQL, INSERT_ATTEMPT_SQL } from './db_sql_queries.js';

export default function createPostRoutes(db: Database) {
    const router = express.Router();

    router.post('/questions/create', (req, res) => {
        const { discipline, source, description } = req.body;

        db.run(CREATE_QUESTION_SQL, [discipline, source, description], function (err) {
            if (err) return res.status(500).json({ error: err.message });
            res.status(201).json({
                message: 'Question created',
                question_number: this.lastID
            });
        });
    });

    router.post('/questions/attempt', (req, res) => {
        const { question_number, code } = req.body;
        db.run(INSERT_ATTEMPT_SQL, [question_number, code], function (err) {
            if (err) return res.status(500).json({ error: err.message });
            res.status(201).json({
                message: 'Attempt recorded',
                id: this.lastID
            });
        });
    });

    return router;
}
