const path = require("path")
const fs = require("fs")
const HtmlWebpackPlugin = require('html-webpack-plugin');
function resolve(str = "") {
    return path.join(__dirname, "../", str);
}
//如果只要打包某几个项目的话 在此处修改
function excludeEntry(entries,...names) {
    return entries.filter((name)=>!names.includes(name))
}
const entries = excludeEntry(fs.readdirSync(resolve("src"), {encoding: "utf8"}),"t2","double_gift");
const Utils = {
    assetsPath(str) {
        return path.posix.join("static", str)
    },
    firstEntryNames() {
        return entries[0]
    },
    generateMultiEntryNames() {
        return entries.reduce((config, name) => {
            config[name] = `./${name}/main.js`;
            return config;
        }, {})
    },
    generateMultiEntryRewrite() {
        return entries.map((name) => ({from: new RegExp(`^/${name}`), to: `/${name}.html`}))
    },
    generateMultiHTMLWebpackPlugin() {
        return entries.map((name) => {
            const filteredArr = entries.filter((e) => e !== name);
            return new HtmlWebpackPlugin({
                template: resolve("public/index.html"),
                filename: `${name}.html`,
                inject: true,
                //排除其他页面的chunk
                excludeChunks: filteredArr.map((name) => [name, `runtime~${name}`]).flat(Infinity)
            });
        })
    }
};
module.exports = Utils;