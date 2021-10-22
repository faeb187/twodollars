module.exports = {
  devtool: "source-map",
  entry: "./src/twodollars.ts",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: "/node_modules/",
      },
    ],
  },
  output: {
    filename: "main.min.js",
    libraryTarget: "umd",
    library: "dollarSigns",
    umdNamedDefine: true,
  },
  optimization: {
    minimize: false,
    // sideEffects: false,
  },
  resolve: {
    extensions: [".ts"],
  },
  target: "node",
};
