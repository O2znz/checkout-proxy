const express = require('express');
const path = require('path');
const app = express();
const PORT = 3001;
const getFns = require('./controllers/getRequests.js')
const faker = require('faker')

// Serve static files. Any requests for specific files will be served if they exist in the provided folder
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/initial', (req, res) => {
    var listingId = faker.random.number({min: 3, max:5})
    getFns.getInitialData(listingId, (err, data) => {
        if (err) {
          res.status(404).send(err)
        } else {
          res.status(200).send(data)
        }
    })
  })
// Start the server on the provided port
app.listen(PORT, () => console.log('Listening on port: ' + PORT));