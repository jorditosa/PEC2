// Check to see if any of the elements in the
// array are numbers greater than 10.

function anyGreaterThan10 (input) {
  input.some((element) => {
    if (element > 10) {
      return true;
    } else {
      return false;
    }
  });

  return input;
};

// Check to see if any of the strings in
// the array is longer than 10 characters.

function longWord (input) {
  input.some((element) => {
    if (element.length > 10) {
      return true;
    } else {
      return false;
    }
  });

  return input;
};

// Check to see if any of the elements in
// the matrix are true.

function truePossibilities (input) {
  input.some((element) => {
    if (element.some((element) => element === true)) {
      return true;
    } else {
      return false;
    }
  });

  return input;
};

// Check to see if 'Lost' is in
// the phrase (using some).

function lostCarcosa (input) {
  input.some((element) => {
    if (element === "Lost") {
      return true;
    } else {
      return false;
    }
  });
  
  return input;
};

module.exports = {
  anyGreaterThan10,
  longWord,
  truePossibilities,
  lostCarcosa
};
