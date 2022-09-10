import caesarCipher from './caesarCipher';

test('lowercase', () => {
  expect(caesarCipher('abc', 1)).toBe('bcd');
});
test('uppercase', () => {
  expect(caesarCipher('ABC', 1)).toBe('BCD');
});
test('negative shift', () => {
  expect(caesarCipher('abcd', -1)).toBe('`abc');
});
test('symbol shift', () => {
  expect(caesarCipher('$ #!', 1)).toBe('%!$"');
});
test('big shift', () => {
  expect(caesarCipher('abcd', 1)).toBe('');
});
