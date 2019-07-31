var allGuesses = [];
function Letter(x) {
    this.name = x.toUpperCase()
}

Letter.prototype.displayLetter = function () {
    if (this.checkGuess(allGuesses)) {
        return (this.name + " ");
    }
    else {
        return "_ ";
    }
}

Letter.prototype.checkGuess = function (guess) {
    allGuesses.push(guess);
    for (i = 0; i < guess.length; i++) {
        if (guess[i] === this.name) {
            return true;
        }
    }
}

var clearGuesses = function (guessArr) {
    allGuesses = guessArr;
}

module.exports = {
    Letter,
    clearGuesses
}
