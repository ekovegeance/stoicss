import fs from "fs";
import path from "path";
import chalk from "chalk";

export async function removeComponent(componentName) {
  const componentPath = path.resolve(
    process.cwd(),
    "components/ui",
    `${componentName}.tsx`
  );
  const indexPath = path.resolve(process.cwd(), "components/ui/index.ts");

  // Cek apakah file komponen ada
  if (!fs.existsSync(componentPath)) {
    console.log(chalk.red(`Component ${componentName} not found.`));
    return;
  }

  // Hapus file komponen
  fs.unlinkSync(componentPath);
  console.log(chalk.green(`${componentName}.tsx successfully removed.`));

  // Hapus ekspor dari index.ts
  if (fs.existsSync(indexPath)) {
    let indexContent = fs.readFileSync(indexPath, "utf8");
    const exportStatement = `export * from "./${componentName}";\n`;

    if (indexContent.includes(exportStatement)) {
      indexContent = indexContent.replace(exportStatement, "");
      fs.writeFileSync(indexPath, indexContent);
      console.log(chalk.yellow(`🔄 Ekspor ${componentName} removed from index.ts`));
    }
  }
}
