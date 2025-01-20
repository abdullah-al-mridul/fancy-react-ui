const path = require("path");

module.exports = {
  mode: "development",
  entry: "./demo/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "demo.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname),
    },
    port: 3000,
    hot: true,
  },
};
