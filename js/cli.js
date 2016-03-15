var moment = require('moment');
moment().format();

(function alarm(){
var tomorrow = moment().add(1,'d');
var day = tomorrow.get('date');
var month = tomorrow.get('month');
var year = tomorrow.get('year');
var alarm = moment(year+" "+month+" "+day, "YYYY MM DD");
console.log(alarm.add(7, 'h').add(7, 'm').format("dddd, MMMM Do YYYY, h:mm:ss a"));
})();
