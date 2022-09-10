import reverseString from './reverseString';

test('Reverses lowercase', () => {
  expect(reverseString('abcde')).toBe('edcba');
});
test('handles special chars', () => {
  expect(reverseString('h@llo w&rld')).toBe('dlr&w oll@h');
});
test('works for palindromes', () => {
  expect(reverseString('racecar')).toBe('racecar');
});
test('works for capital letters', () => {
  expect(reverseString('thisWas')).toBe('saWsiht');
});
