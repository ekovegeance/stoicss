import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import chalk from "chalk";
export function addComponent(component) {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    // Path template (dari folder templates)
    const templatePath = path.join(__dirname, "../../../templates", `${component}.tsx`);
    // Path tujuan di project pengguna (misalnya `components/`)
    const destinationPath = path.join(process.cwd(), "components/ui", `${component}.tsx`);
    if (fs.existsSync(templatePath)) {
        // Buat folder jika belum ada
        fs.mkdirSync(path.dirname(destinationPath), { recursive: true });
        // Copy file dari templates ke project pengguna
        fs.copyFileSync(templatePath, destinationPath);
        console.log(chalk.blue(` Component "${component}" added to components/ui${component}.tsx`));
    }
    else {
        console.error(chalk.red(`Component "${component}" not found in stoicss.`));
    }
}
