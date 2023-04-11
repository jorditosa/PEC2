
function allEven(input) {
  return input.every((element) => {
    return element % 2 === 0
  });
}

// Check to see if all elements in an array
// are of the same type.

function allSameType(input) {
  return input.every((element) => {
    if (typeof element === typeof input[0]) {
      return true;
    } else {
      return false;
    }
  });
}

// Check to see if every element in the matrix is
// an array and that every element in the array is
// greater than 0.

function positiveMatrix(input) {
  return input.every((element) => {
    if (!Array.isArray(element)) {
      return false;
    }

    return element.every((num) => num > 0);
  });
}

// Check that all items in an array are strings
// and that they all only contain the same vowels.

function allSameVowels(input) {
  // Check that all items in the array are strings.
  if (!input.every((element) => typeof element === 'string')) {
    return false;
  }

  const vowels = new Set(["a", "e", "i", "o", "u"]);
  const firstWord = input[0].toLowerCase();
  const vowelSet = new Set(
    firstWord.split("").filter((char) => vowels.has(char))
  );
  return input.every(
    (word) =>
      new Set(word.toLowerCase().split("").filter((char) => vowels.has(char))).size === vowelSet.size
  );
}

module.exports = {
  allEven,
  allSameType,
  positiveMatrix,
  allSameVowels
};
