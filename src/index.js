const words = require("./words.json");
const uniqueRandomArray = require("unique-random-array");

module.exports = {
  all: words,
  random: uniqueRandomArray(words),
};
