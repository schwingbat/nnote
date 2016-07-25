module.exports = function() {

console.log(`
Commands:

nn new <filename>       => Creates a new note with the (optional) specified filename.
nn open <filename>      => Opens the specified file, or creates it if it doesn't exist.
nn list                 => Prints a list of all notes in your note_path
nn set <param> <val>    => Sets the specified parameter to the value in your config
nn peek <filename>      => Prints the first two sentences of the specified file.
nn help                 => Well, here you are!

Your config file is located in your home folder as '.nnconfig.js' and can be edited freely with any text editor.
`)

}