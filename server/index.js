const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
const faker = require('faker');
const bodyparser = require('body-parser');

// Serve static files. Any requests for specific files will be served if they exist in the provided folder
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(bodyparser.json());


app.listen(PORT, () => console.log('Listening on port: ' + PORT));