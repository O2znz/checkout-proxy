const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const bodyparser = require('body-parser');
const morgan = require('morgan');

// Serve static files. Any requests for specific files will be served if they exist in the provided folder
app.use(morgan('dev'));
app.use('/:id', express.static(path.join(__dirname, '../client/dist')));
app.use(bodyparser.json());


app.listen(port, () => console.log('Listening on port: ' + port));