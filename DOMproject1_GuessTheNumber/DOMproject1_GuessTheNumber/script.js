'use strict';
/*
This project is called Guess My Number!

This game app is to help you deepen your knowledge and skills with DOM and Events.


The goal of this project is to guess a secret number which is between 1 and 20.

In the input box, the user can type a number and click Check.On the right side, 
the user gets a message that the guess was Too Low or Too High.

The game starts with a Score of 20 and decreases by one for each failed attempt.

When the user gets the correct number, there is a Correct number message and the screen 
turns green

There is a Highscore feature which keeps track of the user's high score 

The user can click the Again! button which resets everything except for the Highscore.
*/

//Getting html elements to use in javascript

let currentScore = document.getElementsByClassName(`score`);
currentScore = currentScore[0];

let totalScore = document.getElementsByClassName(`highscore`);
totalScore = totalScore[0];

let guessButton = document.getElementsByClassName(`btn check`);
guessButton = guessButton[0];

let againButton = document.getElementsByClassName(`btn again`);
againButton = againButton[0];

let guessNum = document.getElementsByClassName(`guess`);
guessNum = guessNum[0];

let messageRange = document.getElementsByClassName(`message`);
messageRange = messageRange[0];


// generates random number
let min = 1;
let max = 20;

let randomNum = Math.floor(Math.random() * (max - min) + min);
console.log(randomNum);


//If check button is clicked check if the textbox value = randomNum; if not score -= 1
guessButton.onclick = numberCheck;

function numberCheck() {
    console.log(guessNum.value);
    //guessNum.value;
    

    if (Number(guessNum.value) === randomNum) {
        //alert(`Correct!`);
        messageRange.innerHTML = `Correct`;
        document.body.style.backgroundColor = "#60b347";

        if (totalScore.innerHTML < currentScore.innerHTML) {
            totalScore.innerHTML = currentScore.innerHTML;
        }
        
    } else {
        currentScore.innerHTML -= 1 ;
    }

    if (Number(guessNum.value) > randomNum) {
        messageRange.innerHTML = `Too High`;
    } else if (Number(guessNum.value) < randomNum) {
        messageRange.innerHTML = `Too Low`;
    }
}


//If again button is clicked reset everything except the highscore
againButton.onclick = againReset;

function againReset() {
    document.body.style.backgroundColor = "#222";
    guessNum.value = "";
    messageRange.innerHTML = `Start guessing...`;
    currentScore.innerHTML = 20;
    randomNum = Math.floor(Math.random() * (max - min) + min);
    console.log(randomNum);
}








