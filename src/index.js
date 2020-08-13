const words = require("./words.json");
const dictionary = require("./dictionary.json");
const uniqueRandomArray = require("unique-random-array");

const getWord = uniqueRandomArray(words);

module.exports = {
  all: words,
  random: getWord,
  randomMeaning: () => {
    const word = getWord();
    return [word, dictionary[getWord()]];
  },
};
