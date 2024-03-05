var originalWord;

function addRandomLetters() {
    var wordElement = document.getElementById("word");
    if (!originalWord) {
        originalWord = wordElement.innerHTML;
    }
    
    var word = originalWord;
    var randomLetters = generateRandomLetters(2);
    var newWord = word.slice(0) + randomLetters;
    wordElement.innerHTML = newWord;
}

function generateRandomLetters(length) {
    var letters = "abcdefghijklmnopqrstuvwxyz";
    var randomLetters = "";
    for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * letters.length);
        randomLetters += letters.charAt(randomIndex);
    }
    return randomLetters;
}

document.getElementById("generateButton").addEventListener("click", addRandomLetters);