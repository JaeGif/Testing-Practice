function analyzeArray(array) {
  let average = 0;
  for (let i = 0; i < array.length; i++) {
    average += array[i];
  }
  average = average / array.length;

  const min = Math.min(...array);
  const max = Math.max(...array);

  let data = {
    average: Number(`${average}`),
    min: Number(`${min}`),
    max: Number(`${max}`),
    length: Number(`${array.length}`),
  };
  return data;
  // returns an object with average, min, max, length, properties
}
export default analyzeArray;
