function Thermostat() {
  STARTINGTEMP = 20;
  maximumTemperature = 25;
  MINIMUMTEMPERATURE = 10;
  this._temperature = STARTINGTEMP;
  this.isPowerSavingMode = true;
};

Thermostat.prototype.currentTemperature = function() {
  return this._temperature;
};

Thermostat.prototype.up = function() {
  if (this._temperature < maximumTemperature) {
    this._temperature += 1
  };
};

Thermostat.prototype.down = function() {
  if (this._temperature > MINIMUMTEMPERATURE) {
    this._temperature -= 1
  };
};

Thermostat.prototype.switchPowerSavingMode = function() {
  this.isPowerSavingMode = !this.isPowerSavingMode;
  this._toggleMaxTemp();
  this.reduceToNewMaximum();
}

Thermostat.prototype.reduceToNewMaximum = function() {
  while (this._temperature > maximumTemperature) {
    this.down();
  };
}

Thermostat.prototype._toggleMaxTemp = function() {
  maximumTemperature = (maximumTemperature === 25 ? 32 : 25);
};

Thermostat.prototype.reset = function () {
  this._temperature = STARTINGTEMP;
};

Thermostat.prototype.energyUsage = function () {
  return  (this._temperature < 18 ? 'low' : 
          (this._temperature < 25 ? 'medium' : 
                                    'high' )
          ).concat('-usage');
};
