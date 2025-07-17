# **Learning Materials Architecture**

The learning materials is the core of the framework and is composed of two types of Markdown files, referred to as "notes." Each note has a unique identifier composed of a prefix and a number (e.g., `q123.md` or `ps456.md`).
1. **Questions (prefix `q`)**: Represent the problems and exercises to be solved.
2. **Premise Sets (prefix `ps`)**: Contain the fundamental and axiomatic knowledge.

## **Questions (q)**

Each Question file (`qXYZ.md`) is a self-contained learning object structured into four mandatory sections:

Markdown

```
# Premise Sets
Links to the premise notes (`[psXYZ.md]`) that underpin the solution.

# Statement
A clear and unambiguous description of the problem or question.

# Development
A detailed presentation of the resolution process, explaining the logical reasoning, calculations, and justifications for each step.

# Answers
A text block or list containing the final answers, formatted for easy identification.
```

The selection of associated premises is a strategic process. The system prioritizes linking specific concepts (e.g., a theorem's formulas) over generic knowledge (e.g., basic arithmetic rules), assuming the learner has already mastered the fundamentals. However, the system also records simpler premises that were consulted during the resolution. This record is vital as it captures the learner's actual thought process. Every question must be associated with at least one premise.

## **Premise Sets (ps)**
A Premise Set (`psXYZ.md`) represents an atomic and canonical unit of knowledge. Its properties define the framework's operational logic:
- **Single Source of Truth**: Premises act as the definitive source of truth, establishing axioms, theorems, and definitions that are accepted as correct within the system.
- **Hierarchy and Dependency**: Premises can depend on one another, forming a knowledge hierarchy managed through links. A metric, the **Degree of Dependency**, calculates a premise's complexity based on the number of other premises it directly depends on.
- **Axiomatic Scope**: To ensure modularity and prevent recursion, premises are **not proven** within the context of a question. They are the starting point—the axioms for the solution.
- **Modularity and Reusability**: They are designed as reusable conceptual blocks, allowing a single premise to serve as the foundation for countless questions.
- **Application vs. Knowledge**: The system draws a fundamental distinction between **knowing a premise** (memorization) and **knowing how to apply it** (contextual skill). Mastery of premises is a **necessary but not sufficient** condition for problem-solving.
    

## **Tagging System for Knowledge Discovery**
To optimize navigation and content relevance, a tagging system interconnects **Questions**, **Tags**, and **Premise Sets**.
- **Purpose**: The main objective is to guide the learner in moments of doubt. When facing difficulty with a question, the user can explore Premise Sets that share common tags with the question, thereby discovering the most relevant foundational knowledge for that context.
- **Suggestion Mechanism**: When analyzing a question, the system can suggest premises based on tag intersection. Prioritization can be determined by the number of common tags or the predefined relevance of certain tags, creating a contextual and adaptive study flow.
- **Technical Implementation**: Tags are embedded in a YAML frontmatter block at the top of each Markdown file. This is a standard and highly portable method. The web application (`web-app`) includes a synchronizer that parses the frontmatter, persists the tags in a database, and uses them to power the search and recommendation system.

  **Example:**
  ```markdown
  ---
  tags: [calculus, derivatives, physics]
  id: q123
  ---
  ```
