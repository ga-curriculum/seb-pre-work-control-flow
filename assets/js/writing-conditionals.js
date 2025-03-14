describe('The seatbelt conditional', () => {
  it('logs the correct message when isWearingSeatbelt is true', () => {
    spyOn(console, 'log');
    check(true); // Call the function with true

    expect(console.log).toHaveBeenCalledWith(
      'Great job! Always wear your seatbelt for safety.'
    );
  });

  it('logs the correct message when isWearingSeatbelt is false', () => {
    spyOn(console, 'log');
    check(false); // Call the function with false

    expect(console.log).toHaveBeenCalledWith(
      'Remember to put on your seatbelt before driving!'
    );
  });
});
