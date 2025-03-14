describe('Savings Account Tracker', () => {
  beforeEach(() => {
    spyOn(console, 'log');
  });

  it('logs the correct yearly balances and stops at $1,200', () => {
    trackSavings();

    let savingsTest = 1000;

    for (let year = 1; year <= 5; year++) {
      savingsTest *= 1.05; // Increase by 5%

      if (savingsTest >= 1200) {
        expect(console.log).toHaveBeenCalledWith('Savings goal reached!');
        break;
      } else {
        expect(console.log).toHaveBeenCalledWith(
          `Year: ${year} Balance: ${savingsTest.toFixed(2)}`
        );
      }
    }
  });
});
