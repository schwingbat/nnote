const fs = require('fs');
const extparse = require('./extparse');
const globals = require('../globals');
const fileExists = require('./fileexists');

module.exports = function(config, filePath, callback) {
	fileExists(config, filePath, function(exists) {
		if (exists) {
			return callback('File already exists!');
		} else {
			// File doesn't exist, so create it!
			fs.writeFile(filePath, '', function(err) {
				if (err) { return callback('There was a problem creating the file!'); }
				return callback(null);
			});
		}
	});
}
