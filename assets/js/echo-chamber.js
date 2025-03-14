describe('Echo chamber', () => {
  beforeEach(function () {
    spyOn(console, 'log');
  });
  it('logs the message three times', () => {
    echoChamber();
    expect(console.log).toHaveBeenCalledTimes(3);
    expect(console.log).toHaveBeenCalledWith('Hello?');
  });
});
