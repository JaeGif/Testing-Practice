import Calculator from './calculator';

test('addition', () => {
  expect(Calculator.add(2, 2)).toBe(4);
});
test('subtraction', () => {
  expect(Calculator.subtract(3, 2)).toBe(1);
});
test('multiplication', () => {
  expect(Calculator.multiply(3, 6)).toBe(18);
});
test('division', () => {
  expect(Calculator.divide(10, 2)).toBe(5);
});
