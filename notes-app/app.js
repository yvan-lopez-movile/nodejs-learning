const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes.js');

// Customize yargs version
yargs.version('1.1.0');

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function () {
        console.log('Adding new note!');
    }
});

yargs.command({
    command: 'remove',
    describe: 'remove a note',
    handler: function () {
        console.log('Removing the note');
    }
})

yargs.command({
    command: 'list',
    describe: 'list a note',
    handler: function () {
        console.log('Listing notes');
    }
})

yargs.command({
    command: 'read',
    describe: 'read a note',
    handler: function () {
        console.log('Reading the note');
    }
})

// add, remove, read, list


console.log(yargs.argv);
