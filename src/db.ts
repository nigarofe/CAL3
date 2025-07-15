
import sqlite3 from 'sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';
import { CREATE_TABLES_SQL } from './db_sql_queries.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dbPath = path.resolve(__dirname, '../db.db');

console.log(`Attempting to open database at: ${dbPath}`); // Added for debugging

export function initializeDatabase() {
    const db = new sqlite3.Database(dbPath, (err) => {
        if (err) {
            console.error('Error opening database', err.message);
        } else {
            console.log('Connected to the SQLite database.');
        }
    });

    db.serialize(() => {
        db.exec(CREATE_TABLES_SQL);
    });

    return db;
}
