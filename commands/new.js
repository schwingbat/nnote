'use strict';

const fs = require('fs');
const exec = require('child_process').exec;
const globals = require('../globals');
const extParse = require('../functions/extparse');
const mkfile = require('../functions/mkfile');

module.exports = function(config, noteName) {
	const filePath = `${config.note_path}/${noteName || 'newnote'}${extParse(config.note_extension, true) || '.md'}`;
	const execStr = `${config.editor} "${filePath}"`;
	
	//console.log(execStr);

	mkfile(config, filePath, function(err) {
		if (err) { throw new Error(err); }

		exec(execStr, function(err, stdout, stderr) {
			if (err) { throw new Error(err); }
		});
	});
}
