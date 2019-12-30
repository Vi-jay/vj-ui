const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const merge = require('webpack-merge')
function resolve(str = "") {
    return path.join(__dirname, "../", str);
}
module.exports = merge.smart(require("./webpack.base"), {
    mode: "development",
    devServer: {
        hot: true,
        host: "0.0.0.0",
        clientLogLevel: "none",
        disableHostCheck: true,
        useLocalIp: true,
        inline: true,
        contentBase: resolve("public"),
        historyApiFallback: true
    },
    module: {
        rules: [ {
            test: /.scss$/,
            use: ["style-loader", "css-loader", 'postcss-loader', "sass-loader"],
            include: resolve("src")
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
    stats: "errors-warnings"
})
