function onlyEven(array) {
  return array.filter((number) => number % 2 === 0);
}

function onlyOneWord(array) {
  return array.filter((word) => word.split(" ").length === 1);
}

function positiveRowsOnly(array) {
  return array.filter((row) => row.every((number) => number > 0));
}

function allSameVowels(array) {
  return array.filter((word) => {
    const vowels = word.match(/[aeiou]/gi);
    return vowels.every((vowel) => vowel === vowels[0]);
  }
  );
}

module.exports = {
  onlyEven,
  onlyOneWord,
  positiveRowsOnly,
  allSameVowels
};
