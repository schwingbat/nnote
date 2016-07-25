const fs = require('fs');
const path = require('path');
const globals = require('../globals');

module.exports = function(callback) {
	fs.readFile(globals.configPath, 'utf8', function(err, file) {
		if (err) {
			
			// If the file can't be read, create a new one and save it.
			const blankConfig = {
				"editor": null,
				"note_path": null,
				"note_extension": ".md"
			};

			fs.writeFile(globals.configPath, JSON.stringify(blankConfig, null, 4), function(err) {
		
				// After writing, return the blank config file.
				return callback(err, blankConfig);
			});
		} else {

			// If the file does exist, return it.
			return callback(null, JSON.parse(file));
		}
	});
}