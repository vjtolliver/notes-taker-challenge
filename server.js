const express = require("express");
const fs = require("fs");
const PORT = process.env.PORT || 3000;
const app = express();

// Link buttons to notes page
// Old notes should be saved in the left column
// New note makes save button appear
// Saved button is functional
// Old notes appear on the right when clicked
// "Write" notes icon is functional

app.use(express.static('public'));

