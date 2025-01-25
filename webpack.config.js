const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    library: "fancy-react-ui",
    libraryTarget: "umd",
    umdNamedDefine: true,
    clean: true,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              configFile: "tsconfig.json",
              transpileOnly: false,
            },
          },
        ],
        exclude: [
          /node_modules/,
          path.resolve(__dirname, "src/previewComponents"),
          path.resolve(__dirname, "src/vitepressWrapper"),
        ],
      },
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: [
          /node_modules/,
          path.resolve(__dirname, "src/previewComponents"),
          path.resolve(__dirname, "src/vitepressWrapper"),
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        exclude: [
          /node_modules/,
          path.resolve(__dirname, "src/previewComponents"),
          path.resolve(__dirname, "src/vitepressWrapper"),
          path.resolve(__dirname, "src/sandbox"),
          path.resolve(__dirname, "src/stories"),
          path.resolve(__dirname, "src/previousComponents"),
        ],
      },
    ],
  },
  externals: {
    react: "react",
    "react-dom": "react-dom",
  },
};
