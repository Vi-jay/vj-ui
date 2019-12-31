const path = require("path");
const utils = require("./utils");
const webpack = require("webpack");
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
        open: true,
        openPage:utils.firstEntryNames(),
        contentBase: resolve("public"),
        historyApiFallback: {
            rewrites: utils.generateMultiEntryRewrite()
        }
    },
    module: {
        rules: []
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
    stats: "errors-warnings"
})
