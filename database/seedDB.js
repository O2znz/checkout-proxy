var faker = require('faker');
var moment = require('moment')
var seedDatabase = require('./index.js').seedDatabase;

// /////////////////////////////////////////////////////////
// //     HELPER FUNCTIONS FOR DUMMY DATA GENERATION     //
// ///////////////////////////////////////////////////////

// id for 0-99 listing id, agreed upon by group
var id = -1;

//increments the id for each listing
var listId = function() {
  id++;
  return id;
}

// generates 200 random "reserved" dates and converts them into unix timestamp
var generateDates = function() {
  var results = [];
  var today = new Date();
  n = 0

  while (n < 200) {
    var date = faker.date.between(today, '2020-12-31');
    var timeStamp = moment(date).valueOf();
    results.push(timeStamp);
    n++;
  }
  return results;
}

//generates 100 fake reservations

var generateDummyData = function() {
    data = [];
    n = 0;

//TODO FIX ID 
  var listing =  function () {
    var reservation = {
      listingId: listId(),
      Rating: faker.random.number({min: 3, max:5}),
      Price: faker.random.number({min:25, max:250}),
      GuestsMax: faker.random.number({min:1, max:15}),
      CleaningFee: faker.random.number({min:10, max:100}),
      Dates: generateDates()
    }
    return reservation;
  }

    var generateListingArray = (number) => {
      if (number >= 100) {
        return;
      } else if (number < 100) {
        data.push(listing())
        return generateListingArray(number + 1)
      }
    }

    generateListingArray(n);
    return data;
}

var seedData = generateDummyData()


seedDatabase(seedData);


/*
example of what seed data looks like:

[ { listingId: 0,
    rating: 3,
    price: 246,
    guestsMax: 15,
    cleaningFee: 77,
    Dates:
     [ 1598166482168,
       1606923029303,
       1590250425334,
       1590617475885,
       1583901578238,
       1584101174350,
       1606741216729,
       1592395197509,
       1581821822924,
       1603294260735,
       1596070594442,
       1603692930415,
       1595906350057,
       1573013388569,
       1608735872739,
       1594387844220,
       1577233071748,
       1574070781603,
       1588585891757,
       1584122910429,
       1577065743031,
       1582661780260,
       1599446558265,
       1603017693536,
       1607447905543,
       1581418635023,
       1570997000113,
       1584328046811,
       1589613826050,
       1579852743210,
       1595305738095,
       1598892461094,
       1578326587035,
       1594567064541,
       1591890869956,
       1594395230489,
       1580649629995,
       1580923245149,
       1598410587890,
       1598910956042,
       1600958371366,
       1581881207333,
       1585422122518,
       1589564828882,
       1594369332529,
       1588470695948,
       1601856913315,
       1598618199258,
       1596335457509,
       1571257243067,
       1593398429920,
       1585059508781,
       1593198814367,
       1601459429714,
       1607238249267,
       1603418956881,
       1583975435589,
       1584619467974,
       1582581630790,
       1591731636103,
       1602234185415,
       1571308129009,
       1589619259941,
       1589021589207,
       1591752273499,
       1574101487697,
       1572683347058,
       1577688355788,
       1599514300016,
       1598452600700,
       1572392903307,
       1602019362230,
       1603091213728,
       1595681885417,
       1601502238741,
       1586281748129,
       1587878504265,
       1598429429024,
       1574916249571,
       1576810186473,
       1575510860235,
       1586641462453,
       1593045343030,
       1587971231876,
       1590085148055,
       1582336904831,
       1595526786371,
       1579886594046,
       1604662967152,
       1595253351495,
       1579189850024,
       1573358243650,
       1602647735038,
       1604280584112,
       1576943344424,
       1604935902010,
       1587068167110,
       1588683990178,
       1584595363371,
       1608070592621,
       ... 100 more items ] } ]

*/