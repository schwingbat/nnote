'use strict';

const fs = require('fs');
const spawn = require('child_process').spawn;
const globals = require('../globals');
const extParse = require('../functions/extparse');
const mkfile = require('../functions/mkfile');

module.exports = function(config, noteName) {
	const filePath = `${config.note_path}/${noteName || 'newnote'}${extParse(config.note_extension, true) || '.md'}`;

	mkfile(config, filePath, function(err) {
		if (err) { throw new Error(err); }

		spawn(config.editor, [ filePath ], {
			stdio: 'ignore',
			detached: true
		});
	});
}
