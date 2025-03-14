describe('The negotiation conditional', () => {
  beforeEach(() => {
    spyOn(console, 'log');
  });

  it('logs "I\'ll take it!" when the price is less than 5', () => {
    negotiate(4);
    expect(console.log).toHaveBeenCalledWith("I'll take it!");
  });

  it('logs "price + \' for this? That’s too expensive!\'" when the price is greater than 10', () => {
    negotiate(20);
    expect(console.log).toHaveBeenCalledWith(
      '20 for this? That’s too expensive!'
    );

    negotiate(42);
    expect(console.log).toHaveBeenCalledWith(
      '42 for this? That’s too expensive!'
    );
  });

  it('logs "Take off 10% and you\'ve got a deal." when the price is between 5 and 10 (inclusive)', () => {
    negotiate(5);
    expect(console.log).toHaveBeenCalledWith(
      "Take off 10% and you've got a deal."
    );

    negotiate(7);
    expect(console.log).toHaveBeenCalledWith(
      "Take off 10% and you've got a deal."
    );

    negotiate(10);
    expect(console.log).toHaveBeenCalledWith(
      "Take off 10% and you've got a deal."
    );
  });
});
