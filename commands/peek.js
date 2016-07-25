const fs = require('fs');
const globals = require('../globals');
const fileExists = require('../functions/fileexists');
const notepath = require('../functions/notepath');
const colors = require('colors/safe');
const removeext = require('../functions/removeext');


// Print the first ? chars of a file to see if it's the one you want.

module.exports = function(config, filename) {
    filename = removeext(filename);

    fileExists(config, filename, function(exists) {
        if (exists) {
            const path = notepath(config, filename);
            fs.readFile(path, 'utf8', function(err, fileData) {
                let printData = fileData.slice(0, 150) + '...';
                console.log(printData);
            });
        } else {
            console.log(colors.bold.red(`\nCan't peek ${filename}. It doesn't exist!\n`));
        }
    });
}