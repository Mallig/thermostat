function Thermostat() {
  STARTINGTEMP = 20
  this.temperature = STARTINGTEMP
};

Thermostat.prototype.currentTemperature = function() {
  return this.temperature
};

Thermostat.prototype.up = function() {
  this.temperature += 1
};

