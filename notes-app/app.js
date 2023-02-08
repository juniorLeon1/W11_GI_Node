// after installing these npms, lines 2-3 define which npms we will be using on this file
const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

// customize yargs version
yargs.version('1.1.0')

// add, remove, read, list
// create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    // these are the conditions required to be able to run the add command
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

// create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    // these are the conditions required to be able to run the remove command
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

// create list command
yargs.command({
    command: 'list',
    describe: 'list your notes',
    handler() {
        notes.listNotes()
    }
})

// create read command
yargs.command({
    command: 'read',
    describe: 'read a note',
    // these are the conditions required to be able to run the read command
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

yargs.parse()