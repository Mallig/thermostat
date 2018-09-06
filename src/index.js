$( document ).ready( function() {

  var thermostat = new Thermostat();

  document.getElementById("temp").innerHTML = 20
  
  $( "#up" ).click(function() {
    thermostat.up()
    document.getElementById("temp").innerHTML = thermostat.currentTemperature()
  });
  
  $( "#down" ).click(function() {
    thermostat.down()
    document.getElementById("temp").innerHTML = thermostat.currentTemperature()
  });
  
  $( "#reset" ).click(function() {
    thermostat.reset()
    document.getElementById('temp').innerHTML = thermostat.currentTemperature()
  });
    
});
