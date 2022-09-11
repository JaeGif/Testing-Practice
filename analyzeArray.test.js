import analyzeArray from './analyzeArray';
test('Does it give avg, max min and length as an object?', () => {
  expect(analyzeArray([2, 2])).toStrictEqual({
    average: 2,
    min: 2,
    max: 2,
    length: 2,
  });
});
test('1 to 9?', () => {
  expect(analyzeArray([1, 2, 3, 4, 5, 6, 7, 8, 9])).toStrictEqual({
    average: 5,
    min: 1,
    max: 9,
    length: 9,
  });
});
test('Does it work for big nums?', () => {
  expect(analyzeArray([100, 100000])).toStrictEqual({
    average: 50050,
    min: 100,
    max: 100000,
    length: 2,
  });
});
test('negative nums?', () => {
  expect(analyzeArray([0, 0, 1, -1, -5])).toStrictEqual({
    average: -1,
    min: -5,
    max: 1,
    length: 5,
  });
});
