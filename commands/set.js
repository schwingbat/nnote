'use strict';

/**
 * Set the property to the given value in the config file (~/.nnconfig.js)
 */

const fs = require('fs');
const globals = require('../globals');

module.exports = function(config, prop, val) {
    console.log(`Setting prop "${prop}" -> "${val}"`);

    fs.readFile(globals.configPath, 'utf8', function(err, file) {
        const config = JSON.parse(file);

        config[prop] = val;

        const writeString = JSON.stringify(config, null, 4);

        fs.writeFile(globals.configPath, writeString, function(err) {
            if (err) { throw new Error(err); }

            console.log('Wrote config:\n', writeString);
        });
    });
}