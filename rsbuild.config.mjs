import { defineConfig } from "@rsbuild/core";
import { pluginUmd } from "@rsbuild/plugin-umd";
import path from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    pluginUmd({
      name: "Client",
      export: "default",
    }),
  ],
  source: {
    entry: {
      "l2js-client": {
        import: "./src/Client.ts",
        html: false,
      },
    },
  },
  output: {
    target: "web",
    distPath: {
      root: "dist-browser",
      js: "",
    },
    filename: {
      js: "[name].js",
    },
    filenameHash: false,
    minify: false,
    cleanDistPath: true,
  },
  tools: {
    htmlPlugin: false,
    rspack(config, { appendRules }) {
      appendRules({
        test: /\.ts$/,
        include: [path.resolve(rootDir, "src")],
        loader: path.resolve(rootDir, "strip-node-blocks-loader.cjs"),
      });

      config.output ??= {};
      config.output.globalObject = "this";
      return config;
    },
  },
});
