const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const production = false; //process.env.NODE_ENV === "production" || false;

module.exports = {
  entry: ["./src/Client.ts"],
  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: "ts-loader",
        exclude: /node_modules|examples|docs/,
      },
      {
        loader: "webpack-strip-block",
        options: {
          start: "nodejs:start",
          end: "nodejs:end",
        },
      },
    ],
  },
  resolve: {
    extensions: [".ts"],
  },
  mode: "production",
  output: {
    filename: production ? "l2js-client.min.js" : "l2js-client.js",
    path: path.resolve(__dirname, "dist-browser"),
    globalObject: "this",
    library: "Client",
    libraryExport: "default",
    libraryTarget: "umd",
  },
  optimization: {
    minimize: production,
    minimizer: [new TerserPlugin({})],
  },
};
