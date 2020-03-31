process.env.NODE_ENV = "production";
const path = require("path");
const CopyWebpackPlugin = require('copy-webpack-plugin')
const merge = require('webpack-merge')
const utils = require("./utils");
const OptimizeCssnanoPlugin = require('@intervolga/optimize-cssnano-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
function resolve(str = "") {
    return path.join(__dirname, "../", str);
}
module.exports = merge.smart(require("./webpack.base"), {
    mode: "production",
    output: {
        filename: 'js/[name]_[chunkhash:8].js',
        chunkFilename: 'js/[name]_[chunkhash:8].js',
        publicPath: './',
        path: resolve("dist")
    },
    module: {
        rules: []
    },
    optimization: {
        minimize: true, //想要开启tree shaking 必须开启压缩 非压缩状态下不会进行tree shaking
    },
    plugins: [
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin([
            {
                from: resolve("public/static"),
                to: utils.assetsPath("/"),
                ignore: ['.*']
            }
        ]),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[hash].css',
            chunkFilename: 'css/[name].[hash].css'
        }),
        new OptimizeCssnanoPlugin({
            cssnanoOptions: {
                preset: ['default', {
                    discardComments: {
                        removeAll: true,
                    },
                }],
            },
        }),
    ],
})
