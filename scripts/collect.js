#!/usr/bin/env node

const path = require("path");
const fs = require("fs");
const indexSrc =  `
/*
    Milligram's styled elements
 */\n` + 
fs.readdirSync(
    path.resolve(process.cwd(), "src")
)
.filter(x=> x.endsWith(".tsx"))
.map(x=> x.replace(/\.tsx$/, ""))
.map(x=> `export * from "./${x}";`)
.join("\n");

fs.writeFileSync(
    path.join(__dirname, "index.ts"),
    indexSrc
)