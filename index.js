var inquirer = require("inquirer");
var getWord = require("./word.js");
var fs = require("fs")

var wordBank = [];
var currentword = "";
var guessMe = "";
var allGuesses = [];
var i = 10;

fs.readFile("wordbank.txt", "utf8", function (error, data) {
    if (error) {
        console.log("Error: could not read from work bank. Details: " + error);
    }
    else {
        wordBank = data.split(", ")
        currentword = wordBank[Math.floor(Math.random() * wordBank.length)];
        guessMe = new getWord.Word(currentword);
        gameGuess();
    }
})

function gameGuess() {
    console.log(i + " wrong guesses left!");
    if (i > 0) {
        inquirer.prompt([
            {
                type: "input",
                name: "theirGuess",
                message: "Guess a letter! \n" + guessMe.displayWord(),
            }
        ])
            .then(function (response) {
                if (response.theirGuess.length > 1) {
                    console.log("One letter at a time, please!  Try again.");
                    gameGuess();
                }
                else {
                    var capsGuess = response.theirGuess.toUpperCase();
                    var lastGuess = guessMe.displayWord();
                    //if it's their first time guessing the letter
                    if (allGuesses.indexOf(capsGuess) === -1) {
                        allGuesses.push(capsGuess);
                        guessMe.checkWord(capsGuess);
                        var soFar = guessMe.displayWord();
                        //if there are no blanks left
                        if (soFar.indexOf("_") === -1) {
                            console.log("You win! The word was " + soFar);
                            playAgain();
                        }
                        //if they got a new letter they don't lose a turn
                        else if (lastGuess !== soFar) {
                            gameGuess();
                        }
                        else {
                            i--;
                            gameGuess();
                        }
                    }
                    else {
                        console.log("You've already guessed " + capsGuess + "!  Try again!");
                        gameGuess();
                    }
                }
            })
    }
    else {
        console.log("You ran out of turns!");
        playAgain();
    }
}

function playAgain() {
    inquirer.prompt([
        {
            type: "confirm",
            message: "Play again?",
            name: "playAgain"
        }
    ]).then(function (response) {
        if (response.playAgain) {
            i = 10;
            resetGame();
            gameGuess();
        }
        else {
            console.log("Good game!  Bye!");
        }
    })
}

function resetGame() {
    currentword = wordBank[Math.floor(Math.random() * wordBank.length)];
    guessMe = new getWord.Word(currentword);
    allGuesses = [];
    getWord.clearWord(allGuesses);

}

