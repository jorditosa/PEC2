function multiplyBy10(array) {
  return array.map((number) => {
    return number * 10;
  }
  );
}

function shiftRight(array) {
  return array.map((number, index, array) => {
    if (index === 0) {
      return array[array.length - 1];
    } else {
      return array[index - 1];
    }
  }
  );
}

function onlyVowels(array) {
  return array.map( (word) => {
    return word.replace(/[^aeiou]/gi, '');
  });
}

function doubleMatrix(array) {
  console.log(array)
  return array.map((row) => {
    return row.map((number) => {
      return number * 2;
    });
  } 
  );
}

module.exports = {
  multiplyBy10,
  shiftRight,
  onlyVowels,
  doubleMatrix
};
