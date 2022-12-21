#!/usr/bin/env node

const process = require('process');
const path = require('path');
const { format } = require('date-fns');
const { writeFileSync, existsSync } = require('fs');

const actualArgv = process.argv.slice(2);

if (actualArgv < 1) {
    const filename = path.basename(process.argv[1]);
    console.error(`Usage: [${process.argv0}] ${filename} <Update description>`);
    process.exit(1);
}

const name = actualArgv.join(' ');
const slug = name.toLowerCase().split(/\s+/).join('-');
const date = format(new Date(), 'yyyy-MM-dd');

const filename = `${date}-${slug}.md`;

const cwd = process.cwd();
const updatesDir = path.join(cwd, 'content/updates');
const absFilename = path.join(updatesDir, filename);

if (existsSync(absFilename)) {
    console.error(`File already exists! (${absFilename})`);
    process.exit(2);
}

const header = `---
title: '${name}'
date: '${date}'
---

`;

writeFileSync(absFilename, header);
