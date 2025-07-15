export const GET_QUESTIONS_SQL = `
    SELECT
  q.*,
  COALESCE(
    json_group_array(a.code ORDER BY a.attempt_datetime), '[]' ) AS code_vec_json,
  COALESCE(
    json_group_array(a.attempt_datetime ORDER BY a.attempt_datetime), '[]' ) AS date_vec_json
    FROM questions AS q
    LEFT JOIN attempts AS a
    ON a.question_number = q.question_number
    GROUP BY q.question_number
  `;

export const CREATE_QUESTION_SQL = `
    INSERT INTO questions (discipline, source, description)
    VALUES (?, ?, ?)
`;

export const INSERT_ATTEMPT_SQL = `
    INSERT INTO attempts (question_number, code)
    VALUES (?, ?)
`;

export const CREATE_TABLES_SQL = `
    PRAGMA foreign_keys = ON;

    CREATE TABLE IF NOT EXISTS questions (
      question_number INTEGER PRIMARY KEY AUTOINCREMENT,
      discipline      TEXT    NOT NULL,
      source          TEXT    NOT NULL,
      description     TEXT    NOT NULL
    );

    CREATE TABLE IF NOT EXISTS attempts (
      id               INTEGER PRIMARY KEY AUTOINCREMENT,
      question_number  INTEGER NOT NULL,
      code             INTEGER NOT NULL,
      attempt_datetime     DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (question_number)
        REFERENCES questions(question_number)
        ON DELETE CASCADE
    );
`;
