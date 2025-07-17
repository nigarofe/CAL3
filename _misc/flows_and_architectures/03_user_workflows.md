# User Interaction Flow

This document outlines the different levels of user interaction with the learning materials, from basic file interaction to a more advanced web application interface.

## Level 1: Direct File Interaction (Obsidian)

This is the most fundamental level of interaction, suitable for content creators, reviewers, and users who prefer a local, file-based workflow.

**Workflow:**

1.  **Setup:** The user clones the repository and opens the `learning_materials` directory as a vault in the [Obsidian](https://obsidian.md/) desktop application.
2.  **Browsing Premises:** The user navigates to the `premise-sets-md` folder to read and review the foundational concepts. The folder structure and file names allow for easy browsing.
3.  **Answering Questions:** The user opens the `questions-md` folder to see the list of questions. They can open a question file (e.g., `q1.md`) to read it.
4.  **Self-Correction:** After thinking about the answer, the user can check the linked premises or related notes to verify their understanding. The Markdown files can contain links to the relevant `ps` files.
5.  **Content Creation/Editing:** Users can directly edit the Markdown files to fix typos, improve clarity, or add new questions and premises.

Constraints: there's no type of recommendation other than tags in the files and references from the questions to the premises

This level provides full control over the content in a simple, text-based format.






## Level 2: Enhanced Interaction with Web Application

This level includes all actions and workflows from Level 1, with the significant addition of a web application to guide the learning process. Users can still interact directly with the Markdown files, but they now have a powerful tool to optimize their study sessions.

**Added Workflow:**

1.  **Guided Study:** The user accesses the web application.
2.  **Spaced Repetition:** The core feature of the web app is to recommend which questions the user should focus on. It uses a spaced repetition algorithm to schedule questions based on the user's past performance, ensuring they review material at optimal intervals to improve long-term retention.





## Level 3: Content Authoring and Management Flow

This level is for administrators and content authors who manage the learning materials.

**Workflow:**

1.  **Content Creation:** Authors create new questions and premises as Markdown files following the established format (as in Level 1).
2.  **Tagging and Linking:** Authors add metadata and tags to the files. They can also run scripts (like those in `learning_material_tagging`) to automatically process, link, and tag the materials.
3.  **Data Merging:** The `merge_md_files.js` script can be used to combine all Markdown files into a single JSON file (`merged_materials.json`), which can then be loaded into the web application's database.
4.  **Deployment:** The updated data is deployed to the web application, making the new content available to learners at Level 2.
