const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const bodyparser = require('body-parser');
const morgan = require('morgan');
const request = require('request');
app.use(morgan('dev'));
app.use('/:id', express.static(path.join(__dirname, '../client/dist')));
app.use(bodyparser.json());

app.get('/photos/:listingid', (req, res) => {
    request(`http://18.217.122.245/photos/${req.params.listingid}`, (error, response, body) => {
      if (error) return res.end();
      res.send(JSON.parse(body));
    });
  });

app.listen(port, () => console.log('Listening on port: ' + port));