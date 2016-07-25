const path = require('path');
const os = require('os');

const homePath = os.homedir();
const configPath = path.join(os.homedir(), '.nnconfig.js');

module.exports = {
    homePath,
    configPath
};
