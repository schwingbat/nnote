'use strict';

/**
 * Set the property to the given value in the config file (~/.nnconfig.js)
 */

const fs = require('fs');
const globals = require('../globals');
const colors = require('colors/safe');

module.exports = function(config, prop, val) {
    

    fs.readFile(globals.configPath, 'utf8', function(err, file) {
        const config = JSON.parse(file);
        let adjective = 'current';

        if (prop != undefined) {
            console.log(`\nChanging ${colors.bold.green(prop)} from ${colors.bold.red(config[prop])} to ${colors.bold.cyan(val)}`);
            config[prop] = val;
            adjective = 'new';
        }
        
        const writeString = JSON.stringify(config, null, 4);

        fs.writeFile(globals.configPath, writeString, function(err) {
            if (err) { throw new Error(err); }

            console.log('\n'+colors.bold.green(`These are your ${adjective} settings:`)+'\n');

            const keys = Object.keys(config);
            for (let i = 0; i < keys.length; i++) {
                console.log(`${colors.green(keys[i])} = ${colors.cyan(config[keys[i]])}`);
            }

            console.log('');
        });
    });
}