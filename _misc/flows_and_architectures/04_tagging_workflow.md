This document outlines a semi-automated process for tagging questions and premises stored in Markdown files using a Large Language Model (LLM).

## Overview

The process involves consolidating the content of multiple markdown files from two separate directories (`questions-md` and `premise-sets-md`) into a single JSON object. This JSON is then used with an LLM to generate relevant tags for each item.

## Workflow

The workflow is divided into four main steps:

### 1. Consolidate Materials

A script (`merge_md_files.js`) merges all `.md` files from `learning_materials/questions-md` and `learning_materials/premise-sets-md` into a single JSON file named `merged_materials.json`.

- Each element in the array represents a file and contains its name, content, and a `content_type` (`question` or `premise`).
- The array is sorted with all `premise` types first, followed by `question` types.
- Within each content type, the items are sorted numerically based on their filename.

**Example Output (`merged_materials.json`):**
```json
[
  {
    "file_name": "ps1.md",
    "content": "This is the full text content of the first premise set file...",
    "content_type": "premise"
  },
  {
    "file_name": "ps2.md",
    "content": "This is the content of the second premise set file...",
    "content_type": "premise"
  },
  {
    "file_name": "q1.md",
    "content": "This is the full text content of the first question file...",
    "content_type": "question"
  },
  {
    "file_name": "q2.md",
    "content": "This is the content of the second question file...",
    "content_type": "question"
  }
]
```

### 2. Generate Tags with LLM

Manually paste the entire JSON object from `merged_materials.json` into an LLM chat interface.

### 3. Prompt for Tags

Prompt the LLM to return a single JSON object containing the file names and the corresponding generated tags.

**Example LLM Output:**
```json
[
  {
    "file_name": "ps1.md",
    "tags": ["tagX", "tagY"]
  },
  {
    "file_name": "q1.md",
    "tags": ["tagA", "tagB", "tagC"]
  },
  {
    "file_name": "q2.md",
    "tags": ["tagD", "tagE", "tagA"]
  }
]
```

### 4. Apply Tags

Copy the LLM's output and use another script to parse the JSON and apply the tags to the respective files.

## Design Decisions and Alternatives

The current workflow relies on a manual copy-paste step to interact with the LLM. This is a deliberate design choice with specific trade-offs:

- **Simplicity**: It avoids the technical complexity of integrating with a third-party API, including handling authentication, network requests, and error management.
- **Cost**: It completely avoids the monetary costs associated with making API calls to a managed LLM service.
- **Flexibility**: It allows the user to leverage any web-based LLM interface without being tied to a specific provider.

The alternative would be to fully automate the process by using an LLM API to programmatically send materials and receive tags. While this would eliminate the manual step, it was decided against to keep the project's operational costs at zero and reduce implementation complexity. A single script could still be created to orchestrate the consolidation and application of tags, leaving only the LLM interaction as a manual step.