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
          /previewComponents/,
          /vitepressWrapper/,
          /sandbox/,
          /stories/,
          /previousComponents/,
        ],
      },
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: [
          /node_modules/,
          /previewComponents/,
          /vitepressWrapper/,
          /sandbox/,
          /stories/,
          /previousComponents/,
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        exclude: [
          /node_modules/,
          /previewComponents/,
          /vitepressWrapper/,
          /sandbox/,
          /stories/,
          /previousComponents/,
        ],
      },
    ],
  },
  externals: {
    react: "react",
    "react-dom": "react-dom",
  },
};
