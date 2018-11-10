const path = require("path");
const webpack = require("webpack");
const tsConfigPath = path.resolve(__dirname, "./tsconfig.json")
const args = process.argv.slice(2);
const mode = args[args.indexOf("--mode") + 1] === "production" ? "production" : "development";
const production = mode === "production";
console.log("mode: production: ", mode, production);
module.exports = {
    devtool: (!production ? "source-map" : undefined), 
    mode,
    entry: {
        ['milligrami' + (production ? ".min" : "")]: path.resolve(__dirname, '../src/index.ts'),
    },
    output: {
        path: path.resolve(__dirname, '../lib/umd'),
        filename: '[name].js',
        libraryTarget: 'umd',
        library: 'Milligrami',
        umdNamedDefine: true
    },
    resolve: {
        extensions: ['.ts', '.tsx']
    },
    // devtool: 'source-map',
    plugins: [

    ],
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: 'ts-loader',
            options: {
                configFile: tsConfigPath
            }
        }],
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
}