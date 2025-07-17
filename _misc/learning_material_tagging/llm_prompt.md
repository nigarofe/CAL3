Please analyze the following JSON data, which contains a mix of educational content types: 'premise' and 'question'. Your task is to generate relevant tags for each item based on its content.

1.  **Identify Key Concepts:** For each object in the array, examine the 'content' field to identify the main topics, subjects, and key concepts.
2.  **Generate Tags:** Create an array of tags (strings) that accurately represent these concepts.
3.  **Format Output:** Return a single JSON array of objects. Each object should contain the original 'file_name' and a new 'tags' field, which is an array of the tags you generated.

Here is the data:

```json
<PASTE `merged_materials.json` CONTENT HERE>
```
