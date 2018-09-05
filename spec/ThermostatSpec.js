describe('Thermostat', function() {
  beforeEach(function() {
    thermostat = new Thermostat;
  });

  it('starts at 20 degrees', function() {
    expect(thermostat.currentTemperature()).toEqual(20);
  });

  it('starts in power saving mode', function() {
    expect(thermostat.isPowerSavingMode).toEqual(true);
  });

  it('can increase the temperature by 1', function() {
    thermostat.up();
    expect(thermostat.currentTemperature()).toEqual(21);
  });

  it('can decrease t he temperature by 1', function() {
    thermostat.down();
    expect(thermostat.currentTemperature()).toEqual(19);
  });

  it('will not go below 10 degress', function(){
    thermostat.temperature = 10;
    thermostat.down();
    expect(thermostat.currentTemperature()).toEqual(10);
  });

  it('can switch between power saving modes', function(){
    thermostat.switchPowerSavingMode();
    expect(thermostat.isPowerSavingMode).toEqual(false);
  });

  describe('when power saving mode is on', function() {
    it('maximum temperature allowed is 25 degrees', function() {
      thermostat.temperature = 25;
      thermostat.up();
      expect(thermostat.currentTemperature()).toEqual(25);
    });
  });
  
  describe('when power saving mode is off', function() {
    it('maximum temperature allowed is 32 degrees', function() {
      thermostat.temperature = 28;
      thermostat.switchPowerSavingMode();
      thermostat.up();
      expect(thermostat.currentTemperature()).toEqual(29);
    });
  });
});
