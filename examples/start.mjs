import { readFile } from "node:fs/promises";
import { spawn } from "node:child_process";
import process from "node:process";
import { createInterface } from "node:readline/promises";
import { fileURLToPath } from "node:url";

const packageJsonPath = fileURLToPath(new URL("package.json", import.meta.url));
const packageJson = JSON.parse(await readFile(packageJsonPath, "utf8"));
const scripts = Object.keys(packageJson.scripts ?? {}).filter((name) => name !== "start");

if (scripts.length === 0) {
  console.error("No npm scripts are available to run.");
  process.exitCode = 1;
} else {
  console.log("Available examples:\n");
  scripts.forEach((name, index) => console.log(`  ${index + 1}. ${name}`));

  const prompt = createInterface({ input: process.stdin, output: process.stdout });
  let selectedScript;

  while (!selectedScript) {
    const answer = (await prompt.question("\nSelect an example to run (or 0 to exit): ")).trim();
    const selection = Number(answer);

    if (selection === 0) {
      break;
    }

    if (Number.isInteger(selection) && selection >= 1 && selection <= scripts.length) {
      selectedScript = scripts[selection - 1];
    } else {
      console.error(`Please enter a number from 1 to ${scripts.length}.`);
    }
  }

  prompt.close();

  if (selectedScript) {
    console.log(`\nRunning npm run ${selectedScript}\n`);

    const npmExecPath = process.env.npm_execpath;
    const command = npmExecPath ? process.execPath : process.platform === "win32" ? "npm.cmd" : "npm";
    const args = npmExecPath ? [npmExecPath, "run", selectedScript] : ["run", selectedScript];
    const child = spawn(command, args, { stdio: "inherit" });

    child.on("error", (error) => {
      console.error(`Unable to run ${selectedScript}:`, error.message);
      process.exitCode = 1;
    });

    child.on("exit", (code) => {
      process.exitCode = code ?? 1;
    });
  }
}
