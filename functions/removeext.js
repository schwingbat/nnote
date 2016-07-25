const path = require('path');

module.exports = function(filename) {
    return path.basename(filename, path.extname(filename));
}