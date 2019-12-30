const path = require("path")
const Utils = {
    assetsPath(str){
        return path.posix.join("static",str)
    }
};
module.exports = Utils;