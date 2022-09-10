import capitalize from './capitalize';

test('Does it capitalize the first letter?', () => {
  expect(capitalize('hello')).toBe('Hello');
});
