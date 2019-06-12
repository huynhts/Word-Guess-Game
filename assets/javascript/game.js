//declare global variables here
var wins = 0;
var guessCount = 15;
var lettersGuessed = [];
var cpuWord = "";

//points to html ID to change text content
var wCounter = document.getElementById("winCount");
var ranChar = document.getElementById("mysteryWord");
var remainingGuesses = document.getElementById("guessCount");
var userLetter = document.getElementById("letterGuessed");

//this function contains the array of possible hangman words and selects the cpu word
function randomWord() {
    var tmntChar = [
        "michaelangelo",
        "leonardo",
        "ralpheal",
        "donatello",
        "splinter",
        "shredder"
    ];

    cpuWord = tmntChar[Math.floor(Math.random() * tmntChar.length)];
    return cpuWord;

}

//select character for user to guess
randomWord();
console.log(cpuWord);

//function to generate "_" per letter of hangman word
function mysterySpace() {
    var spaces = [];
    for(var i = 0; i < cpuWord.length; i++) {
        spaces[i] = "_";
    }
    ranChar.textContent = spaces.join(' ');

}

//call mysterySpace function to display empty hangman spaces for user
mysterySpace();
console.log(cpuWord.length);

//this for loop is activated by a keystroke event from user
document.onkeyup = function(letterPressed) {
    var userGuess = letterPressed.key;
    console.log(userGuess);
    lettersGuessed.push(" " + userGuess);

//this for loop takes user guessed letter and compares against cpuWord array for a match
    var answer = [];
    for(var j = 0; j < cpuWord.length; j++) {
        if (userGuess === cpuWord[j]) {
            answer[j] = userGuess;
            guessCount--;
        } else if (userGuess !== cpuWord[j]) {
            answer[j] = "_";
            guessCount--;
            if (guessCount === 0){
                guessCount = 15;
                lettersGuessed = [];
                cpuWord ="";
                randomWord();
                mysterySpace();
            }
        } else if (cpuWord[j] !== "_") {
            wins++;
            guessCount = 15;
            lettersGuessed = [];
            cpuWord = "";
            randomWord();
            mysterySpace();
        }
        
        wCounter.textContent = wins;
        ranChar.textContent = answer.join(' ');
        remainingGuesses.textContent = guessCount;
         userLetter.textContent = lettersGuessed;

    }

}

