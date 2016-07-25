const fs = require('fs');
const globals = require('../globals');
const exec = require('child_process').exec;
const notepath = require('../functions/notepath');
const newCmd = require('./new');
const fileExists = require("../functions/fileexists");
const removeext = require('../functions/removeext');

module.exports = function(config, name) {
    name = removeext(name);

    const nPath = notepath(config, name);

    fileExists(config, name, function(exists) {
        if (exists) {
            const execStr = `${config.editor} "${nPath}"`;

            exec(execStr, function(err, stdout, stderr) {
                if (err) { throw err; }
            });
        } else {
            return newCmd(config, name);
        }
    })
}