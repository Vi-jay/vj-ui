const path = require("path");
const AutoDllPlugin = require('autodll-webpack-plugin');
const pkg = require("../package");
const utils = require("./utils");
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

function resolve(str = "") {
    return path.join(__dirname, "../", str);
}
const isProd = process.env.NODE_ENV === 'production';
module.exports = {
    context: resolve("src"),
    entry: utils.generateMultiEntryNames(),
    resolve: {
        extensions: [".js", ".json", ".vue",".ts"],
        alias: {
            '@': resolve('src'),
            'assets': resolve('src/assets'),
        }
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader',
            include: resolve("src")
        }, {
            test: /\.js$/,
            use: {loader: "babel-loader", options: {cacheDirectory: true}},
            include: resolve("src")
        }, {
            test: /\.s?css$/,
            use: [isProd?MiniCssExtractPlugin.loader:'vue-style-loader', "css-loader", 'postcss-loader', "sass-loader"],
            include: resolve("src")
        },{
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: 'url-loader',
            options: {
                limit: 10000,
                // 此处必须将esModule关闭 用正常的commonjs导出图片 因为bebel配置里没有将esModule语法转换成commonjs语法 所以如果开启的话无法被浏览器识别
                esModule: false,
                name: utils.assetsPath('img/[hash:7].[ext]')
            }
        }, {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            loader: 'url-loader',
            options: {
                limit: 10000,
                esModule: false,
                name: utils.assetsPath('fonts/[hash:7].[ext]')
            }
        }
        ]
    },

    plugins: [
        ...utils.generateMultiHTMLWebpackPlugin(),
        new VueLoaderPlugin(),
        new AutoDllPlugin({
            inject: true,
            filename: '[name]_[hash].js',
            entry: {
                vendor: ["vue"]
            }
        })
    ],
    stats: "errors-warnings"
}