import fs from "fs";
import path from "path";
import chalk from "chalk";
import { fileURLToPath } from "url";

export function addComponent(component, type) {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  // Specify the destination folder based on component type
  let folderPath;
  switch (type) {
    case 'blocks':
      folderPath = path.join(__dirname, "../../../components/blocks/");
      break;
    case 'skeleton':
      folderPath = path.join(__dirname, "../../../components/skeleton/");
      break;
    case 'stocks':
      folderPath = path.join(__dirname, "../../../components/stocks/");
      break;
    case 'form':
      folderPath = path.join(__dirname, "../../../components/form/");
      break;
    case 'page':
      folderPath = path.join(__dirname, "../../../components/page/");
      break
    default:
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
  } else {
    console.error(chalk.red(`Component ${component} not found in stoicss/${type}.`));
  }
}
