const path = require("path");

module.exports = {
  // devtool: "inline-source-map",
  entry: "./src/twodollars.ts",
  mode: "production",
  output: { filename: "main.min.js" },
  optimization: {
    minimize: true,
  },
  resolve: {
    extensions: [".ts"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: "/node_modules/",
      },
    ],
  },
};
