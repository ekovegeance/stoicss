import fs from "fs";
import path from "path";
import chalk from "chalk";
import { fileURLToPath } from "url";
export function addComponent(component, type) {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    // Specify the destination folder based on component type
    let folderPath;
    if (type === 'blocks') {
        folderPath = path.join(__dirname, "../../../components/blocks/");
    }
    else if (type === 'skeleton') {
        folderPath = path.join(__dirname, "../../../components/skeleton/");
    }
    else {
        folderPath = path.join(__dirname, "../../../components/ui/");
    }
    // Create the folder if it doesn't exist
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
    }
    // Specify the template path by type
    const templatePath = path.join(__dirname, `../../../templates/`, type, `${component}.tsx`);
    const destinationPath = path.join(folderPath, `${component}.tsx`);
    // Check if the template exists and copy it to the destination folder
    if (fs.existsSync(templatePath)) {
        fs.copyFileSync(templatePath, destinationPath);
        console.log(chalk.green(`Component "${component}" added to components/${type}/${component}.tsx`));
    }
    else {
        console.error(chalk.red(`Component ${component} not found in stoicss/${type}.`));
    }
}
