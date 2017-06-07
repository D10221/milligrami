#!/usr/bin/env node
const pug = require("pug");
const fs  = require("fs");
fs.writeFileSync(
    "built/__demo__/window.html",
    pug.renderFile('src/__demo__/window.pug')
);