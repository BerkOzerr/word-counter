const words = document.getElementById("words-counter");
const wordCount = document.getElementById("words");
const spaceCount = document.getElementById("space");
const letterCount = document.getElementById("letter");

words.addEventListener("input", wordMaker);

function wordMaker(e) {
  let wordsTrimmed = words.value.replace(/\s+/g, " ").trim(); //space handler
  let spaceTrimmed = words.value.replace(/\s/g, "#");
  let splitWords = wordsTrimmed.split(" ");
  let numberofWord = splitWords.length;
  let numberofSpace = 0;
  let numberofletter = wordsTrimmed.length;

  for (let index = 0; index < spaceTrimmed.length; index++) {
    if (spaceTrimmed[index] === "#") {
      numberofSpace++;
    }
  }

  if (splitWords[0] === "") {
    numberofWord = 0;
  }

  wordCount.innerHTML = numberofWord;
  spaceCount.innerHTML = numberofSpace;
  letterCount.innerHTML = numberofletter;
}

// var str = '  A B  C   D EF ';
// console.log(str.replace(/\s/g, '#'));  // ##A#B##C###D#EF#
// console.log(str.replace(/\s+/g, '#')); // #A#B#C#D#EF#
