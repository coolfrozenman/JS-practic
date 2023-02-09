// console.log(findLongestWord("The quick brown fox jumpeds over the lazy dog"));

// const findLongestWord = function (string) {

//   const words = string.split(" ");
//   let longWord = "";
//   let longWordsLength = 0;

//   for (let i = 0; i < words.length; i += 1) {
//     if (words[i].length > longWordsLength) {
//       longWordsLength = words[i].length;
//       longWord = words[i];
//     }
//   }
//   return longWord;
// };
// console.log(findLongestWord("The quick brown fox jumpeds over the lazd dog"));

const findLongestWord = function (string) {
  const items = string.split(" ");
  let longWordLength = 0;
  let longWord = "";

  for (const item of items) {
    if (longWordLength < item.length) {
      longWordLength = item.length;
      longWord = item;
    }
  }
  return longWord;
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'
