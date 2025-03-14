describe('Cryptocurrency investment', () => {
  beforeEach(function () {
    spyOn(console, 'log');
  });
  it('logs the correct values', () => {
    cryptoInvestment();
    let investmentTest = 1000;
    for (let year = 1; year < 11; year++) {
      if (year === 7) {
        investmentTest = investmentTest * 0.25;
      } else {
        investmentTest = investmentTest * 1.1;
      }
      expect(console.log).toHaveBeenCalledWith(
        'Years: ' + year + ' Value: ' + investmentTest
      );
    }
  });
});
