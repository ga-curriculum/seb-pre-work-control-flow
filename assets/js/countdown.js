describe('The countdown loop', () => {
  beforeEach(function () {
    spyOn(console, 'log');
  });
  it('logs all the correct messages in order', () => {
    countDown();
    let daysUntilTheFinaleTest = 30;
    while (daysUntilTheFinaleTest > 0) {
      expect(console.log).toHaveBeenCalledWith(
        'Only ' + daysUntilTheFinaleTest + ' more days!'
      );
      daysUntilTheFinaleTest = daysUntilTheFinaleTest - 1;
    }
    expect(console.log).toHaveBeenCalledWith("It's finally here!");
  });
});
