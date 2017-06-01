const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const isDevBuild = ! (process.env.NODE_ENV === "production");
console.log(`isDevBuild: ${isDevBuild}`);
// Locations: 

const sourceDir = path.resolve(__dirname, "./src");
const outDir = path.resolve(__dirname, 'dist');
// const context = sourceDir;
// const manifest = path.resolve(outDir, "vendor-manifest.json");
// const main = [path.resolve(sourceDir, 'main.ts')];
const index = [path.resolve(sourceDir, 'index.ts')];
// const vendor = [path.resolve(sourceDir, "vendor.js")];
const tsConfig = "./tsconfig.json";
// const htmlWebpackPluginTemplate = path.resolve(sourceDir, "index.html");
// const resources = path.resolve(__dirname, 'resources/**/*');
const outputFilenameTemplate = '[name].bundle.js';

// ts-loader: config:
const tsLoaderOptions = {
    configFileName: tsConfig
}

// Will Trhow if Not exists
try {
    fs.statSync(tsLoaderOptions.configFileName);
} catch (e) {
    console.error("tsconfig.json: 'Not Found?'");
    console.error(e.message);
    process.exit(-1);
}

module.exports = (env) => {
    return [{
        stats: {
            modules: false
        },
        // devtool: '#source-map',
        entry: {
            index
        },
        resolve: {
            modules: ['node_modules'],
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
        output: {
            path: outDir,
            filename: outputFilenameTemplate
        },
        module: {
            rules: [
                {
                    test: /\.(png|woff|woff2|eot|ttf|svg|ico)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                    use: ['url-loader']
                },
                {
                    test: /\.css$/,
                    use: [
                        'style-loader', 'css-loader'
                    ],
                    exclude: [/node_modules/]
                },
                {
                    test: /\.tsx?$/,
                    exclude: [/node_modules/],
                    use: [{
                        loader: 'ts-loader',
                        options: tsLoaderOptions
                    }]
                },
                {
                    test: /\.js$/,
                    exclude: [/node_modules/],
                    use: [{
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015']
                        }
                    }],
                },
                {
                    test: /\.txt$/,
                    use: 'raw-loader'
                }
            ]
        },
        plugins: [
            // ...
            // new webpack.optimize.CommonsChunkPlugin('vendor'),            
            // new webpack.DllReferencePlugin({
            //     context: sourceDir,
            //     manifest: manifest
            // }),
            // new HtmlWebpackPlugin(
            //     {
            //         template: htmlWebpackPluginTemplate,
            //         inject: "body"
            //     }
            // ),
            // new CopyWebpackPlugin([
            //     { from: resources, },
            // ])
        ]
            .concat(isDevBuild ? [
                // Plugins that apply in development builds only          
                new webpack.SourceMapDevToolPlugin({
                    filename: '[file].map', // Remove this line if you prefer inline source maps
                    moduleFilenameTemplate: path.relative(
                        outDir,
                        '[resourcePath]'), // Point sourcemap entries to the original file locations on disk
                    // columns: false, // false: is faster (500ms), When false column mappings in SourceMaps are ignored and a faster SourceMap implementation is used
                    // module: false, // true: is faster, When false loaders do not generate SourceMaps and the transformed code is used as source instead
                }),
            ] : [
                    // Plugins that apply in production builds only,
                    new webpack.DefinePlugin({
                        'process.env.NODE_ENV': JSON.stringify('production')
                    }),
                    new webpack.optimize.UglifyJsPlugin({
                        beautify: false,
                        mangle: {
                            screw_ie8: true,
                            keep_fnames: true
                        },
                        compress: {
                            screw_ie8: true
                        },
                        comments: false
                    }),
                    // ... 
                    // new ExtractTextPlugin('site.css')
                ]),
    }]
};