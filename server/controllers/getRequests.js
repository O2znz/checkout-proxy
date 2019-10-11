var mongoose = require('mongoose');
var Booking = require('../../database/index.js').Booking
mongoose.connect('mongodb://localhost/reservations', {useNewUrlParser: true});

var getInitialData = function(id, callback) {
  Booking.findOne({listingId: id}).then((data) => {
    var initialData = {
      price: data.Price,
      rating: data.Rating,
      listingId: data.listingId
    }
    callback(null, initialData)
  })
  .catch((err) => {
    callback(err)
  })
}



module.exports = {getInitialData}


