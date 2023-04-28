"use strict";

const checkBtn = document.querySelector(".check");
const checkVal = document.querySelector(".guess");
const messageP = document.querySelector(".message");
const scoreSpan = document.getElementsByTagName("span")[0];
const devButton = document.querySelector(".dev");

let random = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

checkBtn.addEventListener("click", function () {
  const checkValue = Number(checkVal.value);

  if (!checkValue) {
    messageP.textContent = `⛔ Invalid Number!, Choose between 1 and 20, you have another trial!`;
  } else if (checkValue === random) {
    messageP.textContent = `Yayyy🍾🎉 That was perfect! Congratulations 🥇`;
    devButton.textContent = score;
    document.querySelector("body").style.backgroundColor = "rgb(30, 155, 30)";
    devButton.style.backgroundColor = "rgb(30, 155, 30)";
    devButton.style.border = "1px dashed white";
    scoreSpan.textContent = `${checkValue}`;

    if (random > highScore) {
      highScore = random;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (checkValue > random) {
    if (score > 1) {
      messageP.textContent = `Too high!`;
      score--;
      scoreSpan.textContent = score;
    } else {
      messageP.textContent = `You lost the game`;
      scoreSpan.textContent = score;
    }
  } else if (checkValue < random) {
    if (score > 1) {
      messageP.textContent = `Low guess!`;
      score--;
      scoreSpan.textContent = score;
    } else {
      messageP.textContent = `You lost the game`;
      scoreSpan.textContent = score;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  random = Math.trunc(Math.random() * 20) + 1;
  messageP.textContent = "Start Guessing...";
  scoreSpan.textContent = score;
  devButton.textContent = "?";
  checkVal.value = "";
  document.querySelector("body").style.backgroundColor = "#252525";
  devButton.style.backgroundColor = "white";
  devButton.style.border = "none";
});

// if (checkValue >= 1 && checkValue <= 20) {
//    else if (checkValue === devNumber()) {
//     saveNote = "Yayy!!🍾 Correct Number!";
//     messageP.textContent = saveNote;
//   } else {
//     saveNote = `Wrong Number!`;
//     messageP.textContent = saveNote;
//     // scoreSpan.textContent = checkValue;
//   }
// }
