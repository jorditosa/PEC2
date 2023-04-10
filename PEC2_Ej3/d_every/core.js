
function allEven(input) {
  input.every((element) => {
    if (element % 2 === 0) {
      return true;
    } else {
      return false;
    }
  });

  return input;
}

// Check to see if all elements in an array
// are of the same type.

function allSameType(input) {
  input.every((element) => {
    if (typeof element === typeof input[0]) {
      return true;
    } else {
      return false;
    }
  });
  
  return input;
}

// Check to see if every element in the matrix is
// an array and that every element in the array is
// greater than 0.

function positiveMatrix(input) {
  input.every((element) => {
    if (Array.isArray(element)) {
      element.every((element) => {
        if (element > 0) {
          return true;
        } else {
          return false;
        }
      });
    } else {
      return false;
    }
  });

  return input;
}

// Check that all items in an array are strings
// and that they all only contain the same vowels.

function allSameVowels(input) {
  input.every((element) => {
    if (typeof element === "string") {
      let vowels = ["a", "e", "i", "o", "u"];
      let elementVowels = [];
      element.split("").forEach((letter) => {
        if (vowels.includes(letter)) {
          elementVowels.push(letter);
        }
      });
      if (elementVowels.every((element) => element === elementVowels[0])) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  });
  
  return input;
}

module.exports = {
  allEven,
  allSameType,
  positiveMatrix,
  allSameVowels
};
