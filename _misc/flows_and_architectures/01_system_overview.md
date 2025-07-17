### **Documentation Structure**

This documentation is organized into multiple files to maintain modularity. This approach allows for focused thinking and development on individual components of the system architecture without the overhead of a single, monolithic document.

### **System Architecture and Components**

|Layer|Technical Implementation|Directory|
|---|---|---|
|**Learning materials (Questions)**|Markdown files managed in Obsidian.|`questions-md`|
|**Learning materials (Premises)**|Markdown files managed in Obsidian.|`premise-sets-md`|
|**Spaced Repetition System (SRS)**|Progressive Web App (PWA) with offline support.|`web-app`|
|**Recommendation System**|Integrated within the PWA, leveraging tag-based similarity.|`web-app`|
|**Memorization Technique**|[Mnemonic Major System](https://en.wikipedia.org/wiki/Mnemonic_major_system) applied manually.|N/A|

The SRS layer transforms passive study into an active review process, while the memorization technique provides a robust tool for retaining abstract information—such as formulas, constants, and dates—by converting it into concrete and memorable images.