const extparse = require('./extparse');

module.exports = function(config, filename) {
    return `${config.note_path}/${filename}${extparse(config.note_extension, true) || '.md'}`;
}