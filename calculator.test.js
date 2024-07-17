const calculator = require('./calculator.fuel');



test('divide 100 p 16 gasoline using choice function', () => {
  expect(calculator.choiceFuel("gasoline", 100)).toBe(6);
});


