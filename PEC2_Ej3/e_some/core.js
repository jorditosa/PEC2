// Check to see if any of the elements in the
// array are numbers greater than 10.

function anyGreaterThan10 (input) {
  return input.some((element) => {
    if (element > 10) {
      return true;
    } else {
      return false;
    }
  });
};

// Check to see if any of the strings in
// the array is longer than 10 characters.

function longWord (input) {
  return input.some((element) => {
    if (element.length > 10) {
      return true;
    } else {
      return false;
    }
  });
};

// Check to see if any of the elements in
// the matrix are true.

function truePossibilities (input) {
  return input.some((element) => {
    if (element.some((element) => element === true)) {
      return true;
    } else {
      return false;
    }
  });
};

// Check to see if 'Lost' is in
// the phrase (using some).

function lostCarcosa (input) {
  return input.some((str) => str.toLowerCase().includes('lost'));
};

module.exports = {
  anyGreaterThan10,
  longWord,
  truePossibilities,
  lostCarcosa
};
