const path = require("path");
const webpack = require("webpack");
const tsLoaderConfigFileName = "./tsconfig.bundle.json"

module.exports = {
    entry: {
        'milligrami': './src/index.ts',
        'milligrami.min': './src/index.ts'
    },
    output: {
        path: path.resolve(__dirname, 'bundle'),
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
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            sourceMap: true,
            include: /\.min\.js$/,
        })
    ],
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: 'ts-loader',
            options: {
                configFileName: tsLoaderConfigFileName
            }
        }],
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
}