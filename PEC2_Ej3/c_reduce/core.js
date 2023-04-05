function sum(array) {
  const total = array.reduce((expected, actual) => {
    return expected + actual;
  }
  );
  return total;
}

function productAll(array) {
  // primero aplanamos el array
  const flatArray = array.flat();
  // luego lo multiplicamos
  const total = flatArray.reduce((expected, actual) => {
    return expected * actual;
  }
  );
  return total;
}

function objectify(array) {
  const object = array.reduce((expected, actual) => {
    expected[actual[0]] = actual[1];
    return expected;
  }
  , {});
  return object;
}

function luckyNumbers(array) {
  const sentence = array.reduce((expected, actual, index) => {
    if (index === array.length - 1) {
      expected += `and ${actual}`;
    } else {
      expected += `${actual}, `;
    }
    return expected;
  }
  , 'Your lucky numbers are: ');
  return sentence;
}

module.exports = {
  sum,
  productAll,
  objectify,
  luckyNumbers
};
