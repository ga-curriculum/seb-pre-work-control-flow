describe('Roll call', () => {
  beforeEach(function () {
    spyOn(console, 'log');
  });

  it('logs each student in the array', () => {
    rollCall();
    expect(console.log).toHaveBeenCalledWith('Aisha');
    expect(console.log).toHaveBeenCalledWith('Hiro');
    expect(console.log).toHaveBeenCalledWith('Fatima');
    expect(console.log).toHaveBeenCalledWith('Luis');
  });
});
