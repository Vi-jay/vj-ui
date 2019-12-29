const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

function resolve(str = "") {
    return path.join(__dirname, "../", str);
}

module.exports = {
    context: resolve("src"),
    entry: {app: "./main.js"},
    resolve: {
        extensions: [".js",".json",".vue"]
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader',
            include: resolve("src")
        },{
            test: /\.js$/,
            use: {loader: "babel-loader", options: {cacheDirectory: true}},
            include: resolve("src")
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({template: resolve("public/index.html")}),
        new VueLoaderPlugin(),
    ],
    stats: "errors-warnings"
}