function weatherData() {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&APPID=05a325c401b08dd257b5bb85b1331963', function(data) {
    $( '#city' ).text(JSON.stringify(data['name']))
    $( '#cityTemp' ).text(JSON.stringify(data['main']['temp']))
  });
}
