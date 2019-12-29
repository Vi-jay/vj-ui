module.exports = {
    merge(source, target) {
        Object.keys(Object.assign({},source,target)).forEach((key) => {
            source[key] = typeof source[key] === "object" ? (Array.isArray(source[key])?[].concat(source[key], target[key]):Object.assign({},source[key], target[key])) : target[key]||source[key]
        });
        return source
    }
}