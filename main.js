const testArray = [1,2,3,4,5,6,7,8,9,0];
const testArray2 = [];


//// first attempt ///// 
function chunker(array, size) {
  if (array.length < 1) {
    return [];
  }
  let result = [];
  let i= 0;
  do {
    const chunk = array.slice(i, size + i); ///picked an easy one since I haven't done an algorithm solve in a while
    result.push(chunk);
    i = i + size;
  } while (i < array.length)
  return result;
}

console.log(chunker(testArray2, 3))

//// solved //////
/// Pretty simple here and looks like most everyone else came to the same conclusion ///