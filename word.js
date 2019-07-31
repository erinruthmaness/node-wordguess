var Letter = require("./letter.js")

function Word(newWord) {
    this.rootWord = newWord;
}

Word.prototype.wordArray = function () {
    var wordArr = this.rootWord.split("");
    for (var i = 0; i < wordArr.length; i++) {
        wordArr[i] = new Letter.Letter(wordArr[i]); //makes each letter a Letter
    }
    return wordArr;
}

Word.prototype.displayWord = function () {
    var wordArr = this.wordArray();
    var wordStr = "";
    for (var i = 0; i < wordArr.length; i++) {
        wordStr += wordArr[i].displayLetter(); //checks Letter params and displays _ or name
    }
    return wordStr;
}

Word.prototype.checkWord = function (guessArr) {
    var wordArr = this.wordArray();
    for (var i = 0; i < guessArr.length; i++) {
        for (var j = 0; j < wordArr.length; j++) {
            wordArr[j].checkGuess(guessArr[i]); //checks each Letter against guess and sets it true/false
        }
    }
}

var clearWord = function (guessArr) {
    Letter.clearGuesses(guessArr);
}

module.exports = {
    Word,
    clearWord
}