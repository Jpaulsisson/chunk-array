const testArray = [1,2,3,4,5,6,7,8,9,0];
const testArray2 = [];

function chunker(array, size) {
  if (array.length < 1) {
    return [];
  }
  let result = [];
  let i= 0;
  do {
    const chunk = array.slice(i, size + i);
    result.push(chunk);
    i = i + size;
  } while (i < array.length)
  return result;
}

console.log(chunker(testArray2, 3))