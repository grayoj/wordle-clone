import wordleBank from "../../wordle.txt";
// Create a multi dimensional array to store letters on the grid
export const defaultBoard = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

// Read the text file containing 5 letter words

export const createWordSet = async () => {
  let wordSets;
  let todaysWord;
  await fetch(wordleBank)
    .then((response) => response.txt())
    .then((result) => {
      const wordArray = result.split("\n");
      todaysWord = wordArray[Math.floor(Math.random() * wordArray.length)];
      wordSets = new Set(wordArray);
    });

  return { wordSets, todaysWord };
};
