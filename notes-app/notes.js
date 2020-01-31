const fs = require('fs');
const chalk = require('chalk');

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title === title);

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        });

        saveNotes(notes);
        console.log(chalk.green.inverse("New note addedd!"));
    } else {
        console.log(chalk.red.inverse('Note title taken!'));
    }
};

const removeNote = (title) => {
    const notes = loadNotes();
    if (notes.length > 0) {
        const notesFound = notes.filter((note) => note.title !== title);

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
};

const listNotes = () => {
    const notes = loadNotes();
    if (notes.length > 0) {
        console.log("Your notes:");
        notes.forEach((note) => {
            console.log(chalk.blue(note.title));
        });
    } else {
        console.log(chalk.yellow("There is no notes."))
    }

};

const readNote = (title, body) => {
    const notes = loadNotes();
    if (notes.length > 0) {
        const isNoteFound = notes.find((note) => note.title === title);
        if (isNoteFound) {
            console.log("title: " + chalk.green(title))
            console.log("body: " + body)
        } else {
            console.log(chalk.red("No note found"));
        }
    } else {
        const msg = 'Notes empty!';
        console.log(chalk.bgRed(msg));
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
};

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
};
