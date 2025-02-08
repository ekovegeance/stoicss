#!/usr/bin/env node
import { Command } from 'commander';
import { addComponent } from '../src/cli/commands/add.js';
import open from 'open';

const program = new Command();

program
    .name('stoicss')
    .description('§ stoicss CLI add components and dependencies to your project')
    .version(process.env.npm_package_version);


//  Command add with options
program
    .command('add <component>')
    .description('Add a component [-bl, --blocks] [-sk, --skeleton] [-st, --stocks] [-fo, --form] [-pa, --page]')
    .option('-bl, --blocks', 'Add to blocks')
    .option('-sk, --skeleton', 'Add to skeleton')
    .option('-st, --stocks', 'Add to stocks')
    .option('-fo, --form', 'Add to ui')
    .option('-pa, --page', 'Add to page')
    .action((component, options) => {
        let type = 'ui'; // Default type
        switch (true) {
            case options.blocks:
                type = 'blocks';
                break;
            case options.skeleton:
                type = 'skeleton';
                break;
            case options.stocks:
                type = 'stocks';
                break;
            case options.form:
                type = 'form';
                break;
            case options.page:
                type = 'page';
                break;
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
