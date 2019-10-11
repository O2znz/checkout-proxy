var mongoose = require('mongoose');
var Booking = require('../../database/index.js').Booking
mongoose.connect('mongodb://localhost/reservations', {useNewUrlParser: true});

var getInitialData = function(id, callback) {
  Booking.findOne({listingId: id}).then((data) => {
    callback(null, data)
  })
  .catch((err) => {
    callback(err)
  })
}



module.exports = {getInitialData}


