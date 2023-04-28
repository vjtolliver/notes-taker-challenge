const express = require("express");
const fs = require("fs");
const PORT = process.env.PORT || 3000;
const app = express();
const path = require('path');


// Old notes should be saved in the left column
// New note makes save button appear
// Saved button is functional
// Old notes appear on the right when clicked
// "Write" notes icon is functional

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// Links homepage button to notes page -DONE
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/notes.html'));
    
});


app.listen(PORT, () => {
    console.log(`Listening to http://localhost:${PORT}`);
});