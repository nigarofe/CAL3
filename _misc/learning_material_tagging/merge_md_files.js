const fs = require('fs').promises;
const path = require('path');

const questionsDir = path.resolve(__dirname, '..', 'learning_materials', 'questions-md');
const premisesDir = path.resolve(__dirname, '..', 'learning_materials', 'premise-sets-md');
const outputDir = __dirname;
const outputFile = path.join(outputDir, 'merged_materials.json');

async function readAllMDFiles(directory, contentType) {
    try {
        const files = await fs.readdir(directory);
        const mdFiles = files.filter(file => file.endsWith('.md') && file.toLowerCase() !== 'readme.md');
        
        const fileContents = await Promise.all(mdFiles.map(async (fileName) => {
            const filePath = path.join(directory, fileName);
            const content = await fs.readFile(filePath, 'utf8');
            return { file_name: fileName, content, content_type: contentType };
        }));

        return fileContents;
    } catch (err) {
        console.error(`Error reading directory ${directory}:`, err);
        return [];
    }
}

function extractNumber(filename) {
    const match = filename.match(/\d+/);
    return match ? parseInt(match[0], 10) : Infinity;
}

async function mergeFiles() {
    try {
        const questions = await readAllMDFiles(questionsDir, 'question');
        const premises = await readAllMDFiles(premisesDir, 'premise');

        const allMaterials = [...premises, ...questions]; // Premises first

        allMaterials.sort((a, b) => {
            // Sort by content_type first (premises then questions)
            if (a.content_type < b.content_type) return 1; // question before premise
            if (a.content_type > b.content_type) return -1; // premise before question

            // If content_type is the same, sort by number
            const numA = extractNumber(a.file_name);
            const numB = extractNumber(b.file_name);
            return numA - numB;
        });

        if (allMaterials.length === 0) {
            console.log('No markdown files to merge.');
            return;
        }

        await fs.writeFile(outputFile, JSON.stringify(allMaterials, null, 2));
        console.log(`Successfully merged ${allMaterials.length} files into ${outputFile}`);

    } catch (err) {
        console.error('Error merging files:', err);
    }
}

mergeFiles();
