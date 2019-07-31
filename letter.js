function Letter(x) {
    this.name = x
}

Letter.prototype.displayLetter = function () {
    if (this.isGuessed) {
        console.log("display letter: " + this.name + " was guessed! " + this.isGuessed)
        return this.name;
    }
    else {
        console.log("display letter: " + this.name + " was not guessed " + this.isGuessed)
        return "_ ";
    }
}

Letter.prototype.checkGuess = function (guess) {
    if (guess === this.name) {
        Letter.isGuessed = true;
        console.log(Letter.isGuessed);
    }
}

module.exports = Letter
