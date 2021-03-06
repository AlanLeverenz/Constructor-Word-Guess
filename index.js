//require npm inquirer and Word functions
var inquirer = require('inquirer');
var MyWord = require('./Word');

// Wheel of Fortune phrases
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
    'CONSIDER THE SOURCE',
    'DEAFENING SILENCE',
    'DIVIDE AND CONQUER',
    'DODGED A BULLET',
    'DOG DAYS OF SUMMER',
    'DOUBLE OR NOTHING',
    'DREAM THE IMPOSSIBLE',
    'ENDLESS SUMMER',
    'EVERY SECOND COUNTS',
    'FAME AND FORTUNE',
    'FIGURATIVELY SPEAKING',
    'FINISH YOUR THOUGHT'
    ];

// INDEX INQUIRER ============================

// initialize variables
var wordStr = '';
var Word = [];
var showArray = [];
var count = 0;
var guesses = 15;

var initialize = function() {
    wordStr = MyWord.makeString(wofArr);
    Word = MyWord.makePhrase(wordStr);
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
            console.log(wordStr);
        } else {
            console.log("NICE TRY, BUT THAT'S NOT IT.");
        }
        // ask to play another
        playAnother();
    });
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
                console.log(wordStr);
                // ask to play another
                playAnother();
            } else {
                getInput();
            }
        });
    } // guess letter

// prompt : getInput
var getInput = function() {
    guesses = 15 - count;
    console.log('You have ' + guesses + ' guesses.')
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
                // ask to play another
                playAnother();
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
            else if (answers.letterOrPhrase === "PHRASE") {
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
}; // end getInput

// initialize and call the input function
initialize();
getInput();
