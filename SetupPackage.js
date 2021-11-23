"use strict";

const fs = require("fs");

const source = fs.readFileSync(__dirname + "/package.json").toString("utf-8");
const sourceObj = JSON.parse(source);

sourceObj.scripts = {};
sourceObj.devDependencies = {};

if (sourceObj.main.startsWith("dist/")) {
  sourceObj.main = sourceObj.main.slice(5);
}

fs.writeFileSync(__dirname + "/dist/package.json", Buffer.from(JSON.stringify(sourceObj, null, 2), "utf-8"));
fs.writeFileSync(__dirname + "/dist/version.txt", Buffer.from(sourceObj.version, "utf-8"));

fs.copyFileSync(__dirname + "/.npmignore", __dirname + "/dist/.npmignore");
fs.copyFileSync(__dirname + "/README.md", __dirname + "/dist/README.md");
fs.copyFileSync(__dirname + "/LICENSE.txt", __dirname + "/dist/LICENSE.txt");
