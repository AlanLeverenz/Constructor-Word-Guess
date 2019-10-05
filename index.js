// The completed game should meet the following criteria:

// The completed game should be able to receive user input using the inquirer or prompt npm packages.

// Your solution should have, at minimum, three files:

// Letter.js: Contains a constructor, Letter. This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. That means the constructor should define:
// A string value to store the underlying character for the letter
// A boolean value that stores whether that letter has been guessed yet
// A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
// A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly

// Word.js: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:
// An array of new Letter objects representing the letters of the underlying word
// A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
// A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)

// index.js: The file containing the logic for the course of the game, which depends on Word.js and:
// Randomly selects a word and uses the Word constructor to store it
// Prompts the user for each guess and keeps track of the user's remaining guesses

// Letter.js should not require any other files.
// Word.js should only require Letter.js

// HINT: Write Letter.js first and test it on its own before moving on, then do the same thing with Word.js

// HINT: If you name your letter's display function toString, JavaScript will call that function automatically whenever casting that object to a string (check out this example: https://jsbin.com/facawetume/edit?js,console)

// Person.prototype.toString = function() {
//     var greeting = 'My name is ' + this.name;
//     if(this.yelling) {
//       return greeting.toUpperCase();
//     }
//     return greeting;
//   }


// require npm inquirer
var inquirer = require('inquirer');

// WOF PHRASES

wofArr = [
    'A CAT HAS NINE LIVES',
    'A BITTER PILL TO SWALLOW',
    'A DIAMOND IN THE ROUGH',
    'A DROP IN THE BUCKET',
    'A FATE WORSE THAN DEATH',
    'A LEGEND IN HIS OWN MIND',
    'A MATCH MADE IN HEAVEN',
    'A PENNY FOR YOUR THOUGHTS',
    'A STITCH IN TIME SAVES NINE',
    'A TOUGH ACT TO FOLLOW',
    'A WALK DOWN MEMORY LANE',
    'A WORK IN PROGRESS',
    'AGED TO PERFECTION',
    'ALL THINGS CONSIDERED',
    'ALONE IN A CROWD',
    'AN ACE UP YOUR SLEEVE',
    'BACK BY POPULAR DEMAND',
    'BE TRUE TO YOURSELF',
    'BETTER LATE THAN NEVER',
    'BITE YOUR TONGUE',
    'BRING HOME THE BACON',
    'CITY THAT NEVER SLEEPS',
    'CLOSED FOR THE HOLIDAYS',
    'COMES WITH THE TERRITORY',
    'CONSIDER THE SOURCE'
    ];

// LETTER CONSTRUCTOR ======================

var Letter = function(letter) { 
    this.letter = letter,
    this.match = false
}

// returns either the underlying letter or an underscore
Letter.prototype.toString = function() {
    var placeHolder = '_';
    if (this.match === true) {
            // console.log(this.letter);
            return this.letter;
        } else if (this.match === false) {
            // console.log(placeHolder);
            return placeHolder;
        } 
}

// compares input with underlying letter
Letter.prototype.compare = function(char) {
    if (this.letter === char.toUpperCase()) {
        this.match = true;
    }
    // console.log("letter: " + this.letter + ", match: " + this.match);
}

// WORD ARRAY WITH LETTER INSTANCES =========================

var makeString = function (arr) {
    var index = Math.floor(Math.random() * 25 );
    var str = arr[index];
    return str;
} 

// build the word object
var makePhrase = function (str) {
    var obj = [];
    for ( var i=0; i < str.length ; i++ ) {
        var letter = new Letter(str[i]);
        obj.push(letter);
    }
    return obj;
}


// INDEX INQUIRER ============================

// initialize variables
var wordStr = '';
var Word = [];
var showArray = [];
var count = 0;

var initialize = function() {
    wordStr = makeString(wofArr);
    Word = makePhrase(wordStr);
    count = 0;
}

// process guess function
var processInput = function(input) {

    // compare input char with Word letters, set match if true
    for (var j = 0 ; j < Word.length ; j++) {
        Word[j].compare(input);
    } 

    // insert the underlying char or underline into showArray
    for (x = 0 ; x < Word.length ; x++) {
        myLetter = Word[x].toString();
        showArray[x] = myLetter;
        }

    // console log the showString
    showString = showArray.join(' ');
    console.log(showString);
}

// test if all letters are true
var checkMatches = function() {
    for ( a=0 ; a < Word.length ; a++ ) {
        if (Word[a].match == false)
        return false
    }
    return true
}

// prompt : guess phrase
var guessPhrase = function() {
    inquirer
        .prompt([{
            name: "phrase",
            type: "input",
            message: "Go for it!"
        }]).then(function(answers){
        // check if the phrase was matched
        if (answers.phrase.toUpperCase() === wordStr) { 
            console.log("YOU GOT IT!");
        } else {
            console.log("NICE TRY, BUT THAT'S NOT IT.")
        }
    });
    // ask to play another
    playAnother();
} // end guess phrase

// prompt : play another?
var playAnother = function() {    
    inquirer
        .prompt([{
        name: "playAgain",
        type: "list",
        message: "Want to play again? ",
        choices: ['YES','NO']
    }]).then(function(answers){
        if (answers.playAgain === 'YES') {
            initialize();
            getInput();
        }
    });
} // end play another

// prompt : guess letter
var guessLetter = function() {
        inquirer.prompt([{
            name: "guess",
            message: "Guess a letter: "
        }]).then(function(answers){
            processInput(answers.guess);
            count++;
            // check if words have been matched
            var check = checkMatches();
            if (check == true) { 
                console.log("YOU GOT IT!");
            } else {
                getInput();
            }
        });
    } // guess letter

// prompt : getInput
var getInput = function() {

    // guess letters for up to 11 rounds
    if (count < 12) {
        inquirer.prompt([{
            name: "guess",
            message: "Guess a letter: "
        }]).then(function(answers){
            processInput(answers.guess);
            count++;
            // check if words have been matched
            var check = checkMatches();
            if (check == true) { 
                console.log("YOU GOT IT!");
            } else {
                getInput();
            }
        });
    } // if < 12

    // more than 11 rounds, give option to guess the phrase
    if (count > 11 && count < 15) {
        inquirer
        .prompt([{
          name: "letterOrPhrase",
          type: "list",
          message: "Want to guess a letter or the whole phrase?",
          choices: ["LETTER", "PHRASE"]
        }]).then(function(answers){
            // if letter, getInput function
            if (answers.letterOrPhrase === "LETTER") {
                guessLetter();
            } 
            // if phrase, guessPhrase function
            if (answers.letterOrPhrase === "PHRASE") {
                guessPhrase();
            }
        });
    } // if > 11

    // if count === 15, end the round
   if (count === 15) {
        inquirer.prompt([{
            name: "playAgain",
            type: "list",
            message: "You used up your guesses. Want to play again? ",
            choices: ['YES','NO']
        }]).then(function(answers){
            if (answers.playAgain === 'YES') {
                initialize();
                getInput();
            }
        });
    }
};

// call the input function
initialize();
getInput();
