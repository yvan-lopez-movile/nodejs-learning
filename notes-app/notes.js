const fs = require('fs');
const chalk = require('chalk');

const getNotes = function () {
    return 'Your notes...'
};

const addNote = function (title, body) {
    const notes = loadNotes();
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title;
    });

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        });

        saveNotes(notes);
        console.log(chalk.green.inverse("New note addedd!"));
    } else {
        console.log(chalk.red.inverse('Note title taken!'));
    }

}

const removeNote = function (title) {
    const notes = loadNotes();
    if (notes.length > 0) {
        const notesFound = notes.filter(function (note) {
            return note.title !== title;
        });

        if (notesFound.length > 0) {
            saveNotes(notesFound);
            const msg = 'Note removed!';
            console.log(chalk.bgGreen(msg));
        } else {
            const msg = 'No note found!';
            console.log(chalk.bgRed(msg));
        }
    } else {
        const msg = 'Notes empty!';
        console.log(chalk.bgRed(msg));
    }

}

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }


}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}
