describe('Thermostat', function()  {
  beforeEach(function()  {
    thermostat = new Thermostat;
  });

  it('starts at 20 degrees', function()  {
    expect(thermostat.currentTemperature()).toEqual(20);
  });

  it('starts in power saving mode', function()  {
    expect(thermostat.isPowerSavingMode).toEqual(true);
  });

  it('can increase the temperature by 1', function()  {
    thermostat.up();
    expect(thermostat.currentTemperature()).toEqual(21);
  });

  it('can decrease the temperature by 1', function()  {
    thermostat.down();
    expect(thermostat.currentTemperature()).toEqual(19);
  });

  it('will not go below 10 degress', function() {
    thermostat._temperature = 10;
    thermostat.down();
    expect(thermostat.currentTemperature()).toEqual(10);
  });

  it('can switch between power saving modes', function() {
    thermostat.switchPowerSavingMode();
    expect(thermostat.isPowerSavingMode).toEqual(false);
  });

  it('can reset temperature to 20 degress', function() {
    thermostat.up();
    thermostat.reset();
    expect(thermostat.currentTemperature()).toEqual(20);
  });

  describe('.energy usage returns', function()  {
    it('low usages when below 18 degrees', function()  {
      thermostat._temperature = 16;
      expect(thermostat.energyUsage()).toEqual('low-usage');
    });

    it('medium usages when below 25 degrees', function()  {
      thermostat._temperature = 23;
      expect(thermostat.energyUsage()).toEqual('medium-usage');
    });

    it('high usages when above 24 degrees', function()  {
      thermostat._temperature = 28;
      expect(thermostat.energyUsage()).toEqual('high-usage');
    });
  });

  describe('when power saving mode is on', function()  {
    it('maximum temperature allowed is 25 degrees', function()  {
      thermostat._temperature = 25;
      thermostat.up();
      expect(thermostat.currentTemperature()).toEqual(25);
    });
  });

  describe('when power saving mode is off', function()  {
    it('maximum temperature allowed is 32 degrees', function()  {
      thermostat._temperature = 32;
      thermostat.switchPowerSavingMode();
      thermostat.up();
      expect(thermostat.currentTemperature()).toEqual(32);
    });
  });

  describe('when switching to power saving mode', function()  {
    it('ensures the temperature is within mode limits', function()  {
      thermostat.switchPowerSavingMode();
      thermostat._temperature = 30;
      thermostat.switchPowerSavingMode();
      expect(thermostat._temperature).toEqual(25);
    });
  });
});
