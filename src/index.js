$( document ).ready( function() {

  weatherData()
  var thermostat = new Thermostat();

  document.getElementById("temp").innerHTML = 20
  
  $( "#up" ).click(function() {
    thermostat.up()
    updateTemperature()
    });
  
  $( "#down" ).click(function() {
    thermostat.down()
    updateTemperature()
    });
  
  $( "#reset" ).click(function() {
    thermostat.reset()
    updateTemperature()
    });

  $( "#switch-powersaving" ).click(function() {
    thermostat.switchPowerSavingMode()
    updateTemperature()  });

  function updateTemperature() {
    $( '#temp' ).text(thermostat.currentTemperature())
    $( '#temp' ).attr('class', thermostat.energyUsage());
  }

});
