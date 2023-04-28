const express = require("express");
const fs = require("fs");
const PORT = process.env.PORT || 3000;
const app = express();
const path = require('path');
//const { v4: uuidv4 } = require('uuid');
//const { readAndAppend, readFromFile } = require('../helpers/fsUtils');

// Old notes should be saved in the left column
// New note makes save button appear --Done?
// Old notes appear on the right when clicked
// "Write" notes icon is functional --Done?

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// Links homepage button to notes page -DONE
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/notes.html'));
});

// Saved button is functional --DONE
app.post('/api/notes', (req, res) => {
const {title, text} = req.body;

if (title && text) {

    const newNote = {
        text,
        title,
        note_id: uuidv4(),
    };

    fs.readFile('./db/db.json', (err, data) => {
        if (err) {
            console.log(err);
        } else {
            const savingNotes = JSON.parse(data);

            savingNotes.push(newNote);

            fs.writeFile(
                './db/db.json',
                JSON.stringify(savingNotes, null, 2),
                (err) => {
               if (err) {
                console.log(err) 
               } else {
                console.log('Saved Notes')
               };
            }
            )
        };
    });
};
});

// app.get('/api/notes', (req, res) => { 
//     const readDB = function () { { oldNotes = fs.readFile('db/db.json');
//     showingNotes = JSON.parse(oldNotes);
// };
//     readDB;
//     res.json(readDB);
//      console.log('Notes are showing!');

// }
// });
const readingFile = function () {
    fs.readFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
};

app.get('/api/notes', (req, res) => {
readingFile();
}
);

app.get('/api/notes', (req, res) => {

fs.appendFile(newNote, './db/db.json');
res.redirect("/");
}
);

// res.redirect("/");

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(PORT, () => {
    console.log(`Listening to http://localhost:${PORT}`);
});