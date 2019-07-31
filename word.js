var Letter = require("./letter.js")

function Word(newWord) {
    this.rootWord = newWord;
}

Word.prototype.wordArray = function () {
    console.log("wordArray is running")
    var wordArr = this.rootWord.split("");
    for (var i = 0; i < wordArr.length; i++) {
        wordArr[i] = new Letter(wordArr[i]); //makes each letter a Letter
    }
    return wordArr;
}

Word.prototype.displayWord = function () {
    console.log("displayword is running")
    var wordArr = this.wordArray();
    var wordStr = "";
    for (var j = 0; j < wordArr.length; j++) {
        console.log("letter in display word: " + wordArr[j].name);
        wordStr += wordArr[j].displayLetter(); //problem child, checks Letter params and displays _ or name
        console.log(wordStr);
    }
    return wordStr;
}

Word.prototype.checkWord = function (guess) {
    console.log("checkword is running")
    console.log("checking your guess: " + guess);
    var wordArr = this.wordArray();
    for (var k = 0; k < wordArr.length; k++) {
        console.log("checking " + wordArr[k].name);
        wordArr[k].checkGuess(guess); //checks each Letter against guess and sets it true/false
    }
}

module.exports = Word