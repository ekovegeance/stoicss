#!/usr/bin/env node
import { Command } from 'commander';
import { addComponent } from '../src/cli/commands/add.js';
import open from 'open';

const program = new Command();

program
    .name('stoicss')
    .description('§ stoicss CLI add components and dependencies to your project')
    .version(process.env.npm_package_version);


//  Command add with options -b, --blocks
program
    .command('add <component>')
    .description('Add a component (like button, card, etc.) to UI, blocks, skeleton.')
    .option('-b, --blocks', 'Add to blocks')
    .option('-s, --skeleton', 'Add to skeleton')
    .action((component, options) => {
        let type = 'ui'; // Default type
        if (options.blocks) {
            type = 'blocks';
        } else if (options.skeleton) {
            type = 'skeleton';
        }
        addComponent(component, type);
    });

// help command
program
    .command('help')
    .description('Display help for command')
    .action(() => {
        program.outputHelp();
    });

// repo
program
    .command('repo')
    .description('Open stoicss repository on GitHub')
    .action(() => {
        open('https://github.com/ekovegeance/stoicss');
    });

program.parse();
