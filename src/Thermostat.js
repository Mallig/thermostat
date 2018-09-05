function Thermostat() {
  STARTINGTEMP = 20
  maximumTemperature = 25
  this.temperature = STARTINGTEMP
  this.isPowerSavingMode = true
};

Thermostat.prototype.currentTemperature = function() {
  return this.temperature
};

Thermostat.prototype.up = function() {
  if (this.temperature < maximumTemperature) {
    this.temperature += 1
  }
};

Thermostat.prototype.down = function() {
  if (this.temperature > 10) {
    this.temperature -= 1
  };
};

Thermostat.prototype.switchPowerSavingMode = function() {
  this.isPowerSavingMode = !this.isPowerSavingMode
  this._toggleMaxTemp()
};

Thermostat.prototype._toggleMaxTemp = function() {
  maximumTemperature = (maximumTemperature === 25 ? 32 : 25)
};
