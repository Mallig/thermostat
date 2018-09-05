function Thermostat() {
  STARTINGTEMP = 20
  this.temperature = STARTINGTEMP
  this.isPowerSavingMode = true
};

Thermostat.prototype.currentTemperature = function() {
  return this.temperature
};

Thermostat.prototype.up = function() {
  this.temperature += 1
};

Thermostat.prototype.down = function() {
  if (this.temperature > 10) {
    this.temperature -= 1
  };
};

Thermostat.prototype.switchPowerSavingMode = function() {
  this.isPowerSavingMode = !this.isPowerSavingMode
};
