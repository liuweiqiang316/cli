#!/usr/bin/env node

import { Command } from "commander";
const program = new Command();
program.version("0.0.1").description("CLI for myself");

program
  .command("hello <name>")
  .description("say hello to someone")
  .action((name: string) => {
    console.log(`hello ${name}`);
  });

program.parse(process.argv);
