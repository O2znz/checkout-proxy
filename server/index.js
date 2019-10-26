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
    request(`http://3.133.19.147/photos/${req.params.listingid}`, (error, response, body) => {
      if (error) return res.end();
      res.send(JSON.parse(body));
    });
});


app.get('/reviews/:listingid', (req, res) => {
    request(`http://ec2-18-219-230-255.us-east-2.compute.amazonaws.com/reviews`, (error, response, body) => {
      if (error) return res.end();
      console.log('body obj of photos get request!!!! ', body, 'body obj of photos get request!!!!')
      res.send(JSON.parse(body));
    });
});

app.get('/api/recommendations', (req, res) => {
    request(`http://ec2-13-58-95-198.us-east-2.compute.amazonaws.com:3004/api/recommendations`, (error, response, body) => {
      if (error) return res.end();
      console.log(body)
      res.send(JSON.parse(body));
    });
});


app.listen(port, () => console.log('Listening on port: ' + port));
