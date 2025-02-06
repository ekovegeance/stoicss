import { Command } from "commander";
import { addComponent } from "./commands/add.js";
import { removeComponent } from "./commands/remove.js";
const program = new Command();
program
    .name("stoicss")
    .description("stoicss CLI add components and dependencies to your project")
    .version(process.env.npm_package_version);
program
    .command("add <component>")
    .description("Add components to the project")
    .action(addComponent);
program
    .command("remove <component>")
    .description("Remove components from the project")
    .action(removeComponent);
export function cli() {
    program.parse(process.argv);
}
