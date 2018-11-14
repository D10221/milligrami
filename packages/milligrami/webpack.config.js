const path = require("path");
const tsConfigPath = path.resolve(__dirname, "./tsconfig.es5.json");
module.exports = {  
  mode: "production",
  entry: {
    ["milligrami.min"]: path.resolve(
      __dirname,
      "src/index.ts",
    ),
  },
  output: {
    path: path.resolve(__dirname, "lib/umd"),
    filename: "[name].js",
    libraryTarget: "umd",
    library: "Milligrami",
    umdNamedDefine: true,
  },
  resolve: {
    extensions: [".ts", ".tsx", "js", "jsx"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: {
          configFile: tsConfigPath,
        },
      },
    ],
  },
  externals: {
    react: "React",
    "react-dom": "ReactDOM",
  },
};
