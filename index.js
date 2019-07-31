var inquirer = require("inquirer");
var getWord = require("./word.js");

var currentword = "hello";
var guessMe = new getWord(currentword);

var i = 10;

function gameGuess() {
    console.log(i + " guesses left!");
    if (i > 0) {
        inquirer.prompt([
            {
                type: "input",
                name: "theirGuess",
                message: "Guess a letter! \n"+ guessMe.displayWord(),
            }
        ])
        .then(function (response){
            guessMe.checkWord(response.theirGuess);
            console.log("for test purposes we now have " + guessMe.displayWord());
        })
    }
}

gameGuess();