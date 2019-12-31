const path = require("path");
const AutoDllPlugin = require('autodll-webpack-plugin');
const pkg = require("../package");
const utils = require("./utils");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
function resolve(str = "") {
    return path.join(__dirname, "../", str);
}
module.exports = {
    context: resolve("src"),
    entry: {
        double_gift: "./double_gift/main.js",
        app: "./t2/main.js",
    },
    resolve: {
        extensions: [".js", ".json", ".vue"],
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
        new HtmlWebpackPlugin({template: resolve("public/index.html"),  filename: 'double_gift.html',inject: true, excludeChunks:  ["app","runtime~app"]}),
        new HtmlWebpackPlugin({template: resolve("public/index.html"), filename: 'app.html', inject: true, excludeChunks:["double_gift","runtime~double_gift"]}),
        new VueLoaderPlugin(),
        new AutoDllPlugin({
            inject: true,
            filename: '[name]_[hash].js',
            entry: {
                vendor: Object.keys(pkg.dependencies)
            }
        })
    ],
    stats: "errors-warnings"
}