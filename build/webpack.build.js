const path = require("path");
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const merge = require('webpack-merge')
const utils = require("./utils");
const OptimizeCssnanoPlugin = require('@intervolga/optimize-cssnano-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
function resolve(str = "") {
    return path.join(__dirname, "../", str);
}
module.exports = merge.smart(require("./webpack.base"), {
    mode: "production",
    output: {
        filename: '[name]_[chunkhash:8].js',
        chunkFilename: '[name]_[chunkhash:8].js',
        publicPath: './',
        path: resolve("dist")
    },
    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        hmr: false,
                    },
                }, "css-loader", 'postcss-loader', "sass-loader"],
                include: resolve("src")
            },
        ]
    },
    optimization: {
        sideEffects: false,
        splitChunks: {
            chunks: 'async',   // initial、async和all
            minSize: 1,   // 形成一个新代码块最小的体积
            maxAsyncRequests: 5,   // 按需加载时候最大的并行请求数
            maxInitialRequests: 3,   // 最大初始化请求数
            automaticNameDelimiter: '~',   // 打包分割符
            automaticNameMaxLength: 100,
            minChunks: 2,
            name: 'async-common.js',
        },
        runtimeChunk: true,
        minimize: false, //想要开启tree shaking 必须开启压缩 非压缩状态下不会进行tree shaking
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
