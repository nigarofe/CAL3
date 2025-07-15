Of course. Here is an improved version of the document, reorganized for clarity and conciseness.

### User Guide: Computer Assisted Learning App

This guide explains how to use the application to view, filter, and edit study questions.

***

### 1. Launching the Application

To start, run the **`Study.bat`** file from your desktop. This script automatically starts the backend server and opens the application's main dashboard in your default web browser.

***

### 2. Main Dashboard

The dashboard is the main interface for interacting with your questions. It features a navigation bar and two tables that display question data from `data.json`.

#### Navigation Bar

A green navigation bar is fixed ("sticky") at the top of the page. It contains the application title, "COMPUTER ASSISTED LEARNING," and controls for organizing and filtering the question tables.

* **Order questions by:** Located on the left, this set of buttons (`#`, `PMG-X`, `PMG-D`, `LaMI`, `DSLA`) controls the primary data column shown in the **Compact View**. The active parameter is highlighted.
* **Regex filter:** Located on the right, this tool filters the questions displayed in both tables. Enter a regular expression into the text field and click **Apply** to see only matching questions.

#### Question Tables

Clicking on any question's row in either table will open the **Question Editor View** for that question.

* **Compact View (Primary Table)**
    This table gives a quick summary of the questions, showing only the question number and one other data parameter, which is selected using the "Order questions by" control in the navigation bar.

* **Detailed View (Secondary Table)**
    This table provides a comprehensive, line-by-line breakdown of each question, displaying all of its associated parameters. The columns include:
    * **`#`**: The unique question ID.
    * **`Discipline`**: The subject area (e.g., `C3`).
    * **`Source`**: The question's origin (e.g., `2024-2 Lista 3`).
    * **`Description`**: A brief identifier (e.g., `L3-Q9`).
    * **`Attempts Summary`**: A summary of past attempts (e.g., `7; 2; 5; From memory`).
    * **`DSLA`, `LaMI`, `PMG-D`**: Specific performance metrics.
    * **`PMG-X`**: A key metric highlighted with a color scale (red for higher values) to draw attention.

***

### 3. Question Editor View

This view uses a dual-pane interface for efficient editing and live previewing of a selected question.

* **Editor Pane (Left)**
    This pane contains the editable text fields for the question's core content, which are directly linked to the `data.json` file.
    * **Proposition:** The main problem statement.
    * **Step-by-step:** The detailed solution.
    * **Answer:** The final answer.

* **Live Preview Pane (Right)**
    This pane displays a real-time KaTeX rendering of the content from the editor fields, showing exactly how the final formatted text and mathematical notations will appear.

* **Real-Time Data Sync**
    As you type in the **Editor Pane**, your changes are automatically saved to `data.json`, and the **Live Preview Pane** updates instantly.