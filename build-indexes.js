const fs = require("fs"),
  path = require("path"),
  index = "index.ts";

function buildMutators(dirname, packetsPath) {
  const files = fs.readdirSync(dirname);
  let includes = "",
    exp = "";

  files.forEach((file) => {
    const fullPath = `${dirname}\\${file}`;
    if (file !== index && fs.existsSync(fullPath) && path.extname(file) === ".ts") {
      const baseName = path.basename(file, path.extname(file));
      const packetName = baseName.replace("Mutator", "");

      includes = `${includes}
import ${baseName} from "./${baseName}";
import ${packetName} from "${packetsPath}/${packetName}";`;

      exp = `${exp}  [${baseName}.prototype, ${packetName}],\n`;
    }
  });

  const text = `${includes}\n
export default [
${exp}
];
  `;

  fs.writeFileSync(path.join(dirname, index), text);
}

function buildPackets(dirname) {
  const files = fs.readdirSync(dirname);
  let includes = "";
  let exp = "";

  files.forEach((file) => {
    const fullPath = `${dirname}\\${file}`;
    if (file !== index && fs.existsSync(fullPath) && path.extname(file) === ".ts") {
      const baseName = path.basename(file, path.extname(file));
      includes = `${includes}import ${baseName} from "./${baseName}";\n`;

      exp = `${exp}  ${baseName},\n`;
    }
  });

  const text = `${includes.trim()}\n
export {
${exp}
};
  `;

  fs.writeFileSync(path.join(dirname, index), text);
}

function buildCommands(dirname) {
  const files = fs.readdirSync(dirname);
  let includes = "";
  let exp = "";

  files.forEach((file) => {
    const fullPath = `${dirname}\\${file}`;
    if (file !== index && fs.existsSync(fullPath) && path.extname(file) === ".ts" && file.startsWith("Command")) {
      const baseName = path.basename(file, path.extname(file));
      let key = baseName.substr(7);
      key = key.charAt(0).toLowerCase() + key.slice(1);

      includes = `${includes}import ${baseName} from "./${baseName}";\n`;

      exp = `${exp}  ${key}: ${baseName}.prototype,\n`;
    }
  });

  const text = `${includes}\n
  export default {
  ${exp}
  };
  `;

  fs.writeFileSync(path.join(dirname, index), text);
}

buildMutators(path.join(__dirname, "src", "network", "mutators", "game"), "../../incoming/game");
buildMutators(path.join(__dirname, "src", "network", "mutators", "login"), "../../incoming/login");

buildPackets(path.join(__dirname, "src", "network", "incoming", "game"));
buildPackets(path.join(__dirname, "src", "network", "incoming", "login"));

buildCommands(path.join(__dirname, "src", "commands"));
