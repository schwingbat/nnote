const fs = require('fs');
const globals = require('../globals');
const colors = require('colors/safe');

// Print a list of all notes in the note directory.

module.exports = function(config, callback) {
    fs.readdir(config.note_path, function(err, listing) {
        if (err) {
            throw new Error(err);
        }
        console.log(colors.green.bold(`\nAll notes in ${config.note_path}\n`));
        listing.forEach(function(item) {
            console.log(item);
        });
        console.log('');
    });
}