const express = require('express');
const path = require('path');
const app = express();
const PORT = 3001;
const getFns = require('./controllers/getRequests.js');
const faker = require('faker');
const bodyparser = require('body-parser');
const moment = require('moment')

// create a fn that goes through all the dates,
// and filters out the ones from the specified month and year
// var datesArr = [ 1598166482168,
//   1606923029303,
//   1590250425334,
//   1590617475885,
//   1583901578238,
//   1584101174350,
//   1606741216729,
//   1592395197509,
//   1581821822924,
//   1603294260735,
//   1596070594442,
//   1603692930415,
//   1595906350057,
//   1573013388569,
//   1608735872739,
//   1594387844220,
//   1577233071748,
//   1574070781603,
//   1588585891757,
//   1584122910429,
//   1577065743031,
//   1582661780260,
//   1599446558265,
//   1603017693536,
//   1607447905543,
//   1581418635023,
//   1570997000113,
//   1584328046811,
//   1589613826050,
//   1579852743210,
//   1595305738095,
//   1598892461094,
//   1578326587035,
//   1594567064541,
//   1591890869956,
//   1594395230489,
//   1580649629995,
//   1580923245149,
//   1598410587890,
//   1598910956042,
//   1600958371366,
//   1581881207333,
//   1585422122518,
//   1589564828882,
//   1594369332529,
//   1588470695948,
//   1601856913315,
//   1598618199258,
//   1596335457509,
//   1571257243067,
//   1593398429920,
//   1585059508781,
//   1593198814367,
//   1601459429714,
//   1607238249267,
//   1603418956881,
//   1583975435589,
//   1584619467974,
//   1582581630790,
//   1591731636103,
//   1602234185415,
//   1571308129009,
//   1589619259941,
//   1589021589207,
//   1591752273499,
//   1574101487697,
//   1572683347058,
//   1577688355788,
//   1599514300016,
//   1598452600700,
//   1572392903307,
//   1602019362230,
//   1603091213728,
//   1595681885417,
//   1601502238741,
//   1586281748129,
//   1587878504265,
//   1598429429024,
//   1574916249571,
//   1576810186473,
//   1575510860235,
//   1586641462453,
//   1593045343030,
//   1587971231876,
//   1590085148055,
//   1582336904831,
//   1595526786371,
//   1579886594046,
//   1604662967152,
//   1595253351495,
//   1579189850024,
//   1573358243650,
//   1602647735038,
//   1604280584112,
//   1576943344424,
//   1604935902010,
//   1587068167110,
//   1588683990178,
//   1584595363371,
//   1608070592621]

// var day = moment(1318781876406);
// console.log(day)
//console.log(day.format('YYYY')) //string
//console.log(day.format('DD MM YY')) //string
// Serve static files. Any requests for specific files will be served if they exist in the provided folder

//  var currentCal = (month, year, dates) => {
//   var mmddStr = month.toString() + " " + year.toString();
//   var copy = dates.slice();

//   var makeReadable = copy.map((date) => {
//     var day = moment(date)
//     return day.format('DD MM YY');
//   })
  
//   var findMonths = makeReadable.filter(date => date.includes(mmddStr));

//   var availableDays = findMonths.map((day) => {
//     return Number(day.substring(0,2))
//   });

//   return availableDays;
// }

// var test = currentCal(12, 19, datesArr)






app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(bodyparser.json());

app.get('/listing', (req, res) => {
    var listingId = faker.random.number({min: 3, max:5})
    getFns.getInitialData(listingId, (err, data) => {
        if (err) {
          res.status(404).send(err)
        } else {
          res.status(200).send(data)
        }
    })
})

app.get('/currentCalendar', (req, res) => {
  console.log('Request orig url:', req.originalUrl);
  var url = req.originalUrl
  var id = url.substring(url.length - 2, url.length);
  
  var today = new Date();
  var todayMoment = moment(today);
  var year = todayMoment.format('YY');
  var month = todayMoment.format('MM');

  //(id, month, year, callback)
  getFns.getCurrentCalendar(id, month, year, (err, data) => {
    if (err) {
      res.status(500).send(err)
    } else {
      console.log("get current calendar succeeded")
      res.status(200).send(data)
    }
  })

});

// app.post('/reservation', (req, res) =>{
//     var req = req.body;

// })


app.listen(PORT, () => console.log('Listening on port: ' + PORT));