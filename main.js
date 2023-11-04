const btn = document.getElementById("btn-cw");
const words = document.getElementById("words-counter");
const wordCount = document.getElementById("words");

btn.addEventListener("click", wordMaker);

function wordMaker() {
  const wordsV = words.value;
  let wordsTrimmed = wordsV.replace(/\s+/g, " ").trim(); //space handler
  console.log(wordsTrimmed);
  let splitWords = wordsTrimmed.split(" ");
  console.log(splitWords);
  let numberofWord = splitWords.length;

  if (splitWords[0] === "") {
    numberofWord = 0;
  }
  wordCount.innerHTML = numberofWord;
}

// var str = '  A B  C   D EF ';
// console.log(str.replace(/\s/g, '#'));  // ##A#B##C###D#EF#
// console.log(str.replace(/\s+/g, '#')); // #A#B#C#D#EF#
