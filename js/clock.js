exports.clock = function() {
  $('#clock').find('h2').append('<h3>'+moment().format('LTS')+'</h3>');
};

exports.alarm = function() {
  $('#alarm_set').submit(function(event){
    event.preventDefault();
    var alarmHour = $('#hour').val();
    var alarmMinute = $('#minute').val();

    var tomorrow = moment().add(1,'d');
    var day = tomorrow.get('date');
    var month = tomorrow.get('month');
    var year = tomorrow.get('year');
    var alarm = moment(year+" "+month+" "+day, "YYYY MM DD");

    $('#alarm').text(alarm.add(alarmHour, 'h').add(alarmMinute, 'm').format("dddd, MMMM Do YYYY, h:mm:ss a"));
    console.log(alarmHour);
    console.log(alarmMinute);
    console.log(alarm);
  });
};
