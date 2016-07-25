const fs = require('fs');
const notepath = require('./notepath');

module.exports = function(config, filename, callback) {
    fs.stat(notepath(config, filename), function(err, stats) {
        if (err) {
            return callback(false);
        } else {
            return callback(true);
        }
    });
}