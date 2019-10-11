const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/reservations', {useNewUrlParser: true});


var Reservation = mongoose.Schema;


var reservationSchema = new Reservation({
  listingId: Number,
  Rating: Number,
  Price:   Number,
  GuestsMax: Number,
  CleaningFee: Number,
  Dates: Array
});


var Booking = mongoose.model('Booking', reservationSchema);

var seedDatabase = (array) => {
  Booking.insertMany(array, function(err) {
    if (err) {
      console.log("there was an error seeding your database");
    } else {
      console.log("you successfully seeded your database");
    }
  });
}


module.exports = {seedDatabase, Booking}