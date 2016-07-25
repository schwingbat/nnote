#!/usr/bin/env node --harmony

'use strict';

const fs = require('fs');
const path = require('path');
const globals = require('./globals');

const colors = require('colors/safe');

const commands = {
	'new': require('./commands/new'),
	'open': require('./commands/open'),
	'set': require('./commands/set'),
	'list': require('./commands/list'),
	'peek': require('./commands/peek'),
	'help': require('./commands/help')
};

// Load the configuration file.
require('./functions/loadconfig')(function(err, config) {
	if (err) {
		throw new Error('There was a problem loading the configuration file!');
	}
	
	if (!config.editor || !config.note_path) {
		console.warn("\nHey, you're unconfigured!\n\nOpen ~/.nnconfig.js in your favorite text editor and fill in the options.\n");
		return;
	}
	
	// If this part is running, we have a valid config file...
	const args = process.argv.slice(2); // Trim node and this script off of the arguments, as we won't be needing them.
	
	switch(args[0]) {
		case 'new':
			// Treat the rest of the arguments as a single string
			return commands['new'](config, args.slice(1).join(' ').trim());
		case 'open':
			return commands['open'](config, args.slice(1).join(' ').trim());
		case 'set':
			// Anything after the param is considered to be a multi-word string.
			let param = args[1];
			let value = args.slice(2).join(' ').trim();
			return commands['set'](config, param, value);
		case 'list':
			return commands['list'](config);
		case 'peek':
			return commands['peek'](config, args.slice(1).join(' ').trim());
		case 'help':
			return commands['help'](config);
		default:
			return commands['help'](config);
	}
});