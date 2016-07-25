module.exports = function(ext, includeDot) {
    if (typeof ext !== 'string') {
        return false;
    }

    // Include the dot by default.
    includeDot = includeDot || 'true';

    if (ext.charAt(0) === '.') {
        return (includeDot)
            ? ext
            : ext.slice(1);
    } else {
        return (includeDot)
            ? '.'+ext
            : ext;
    }
}