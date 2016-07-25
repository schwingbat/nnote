# nn.js v0.0.1

nn.js is a quick and simple command line utility to take and keep track of notes with as little friction as possible. I usually have a terminal open, so for me the best way to do this is with a really short command. I typed in `nn` and it didn't do anything. Now it does!

Basically, you put your favorite editor and the path you want to keep your notes in in the configuration file

## Install

First, make sure you have a recent version of Node.js. I'm using `const`, `let` and arrow functions (`=>`) from ES6 in this module, so whichever version you use has to support those at least. I'm on 6.2.2 as of this writing.

Then to install `nn` itself:

```bash
npm install -g git+https://git@github.com/vantaure/node-note.git
```

Then run `nn` once to create the configuration file in your home directory, open that file and put in your desired settings and BAM! You'll never again forget an important thought in the year between opening Evernote and it finally letting you type.

## Commands

The output of `nn help` will assist here:

```
nn new <filename>       => Creates a new note with the (optional) specified filename.
nn open <filename>      => Opens the specified file, or creates it if it doesn't exist.
nn list                 => Prints a list of all notes in your note_path
nn set <param> <val>    => Sets the specified parameter to the value in your config
nn peek <filename>      => Prints the first two sentences of the specified file.
nn help                 => Well, here you are!
```