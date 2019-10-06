# Constructor-Word-Guess
A Word Guess command-line game using constructor functions.

## What node app does
Constructor-Word-Guess is a browser-less Node.js Command Line Interface application. It utilizes the *inquirer* NPM module to prompt the player for responses. The game asks the player to enter letters, one at a time, to complete a hidden phrase. 

## Overview
The game randomly picks from a list of 36 phrases, sourced from a list of over 6,000 Wheel of Fortune hidden phrases used on the show. The player is prompted to enter a letter. If it matches the same letter in the hidden phrase, the letter appears wherever it is positioned in the phrase. 

After 10 guesses, the player can choose to continue guessing single letters or guess the whole phrase. The player is limited to 15 letter guesses. If the player chooses to guess the whole phrase, that is their final attempt to match the hidden phrase. Win or lose, the player is prompted if they wish to play again.

## How to run the app
Follow these instructions for running the app:
1. Fork the repository from this link: https://github.com/AlanLeverenz/Constructor-Word-Guess.
2. Open Terminal and navigate to your __Constructor-Word-Guess__ repository folder.
3. Use the following syntax after the Terminal prompt:

    `$ node index`

4. You will be prompted to enter a letter. Since there are multiple words in each phrase, a good first character to guess is the spaceband so you can see the length of each word.

## Technical aspects

In addition to the NPM Inquirer package files, there are three JavaScript files that node needs to run the application. They are:
* letter.js
* Word.js
* Index.js

### Letter.js
This file has the constructor that holds a letter, a match property, and two functions for comparing the letter with user input and for displaying the phrase to the user. It displays hidden characters as they are guessed. Unmatched characters appear as an underscore. 

### Word.js
This file holds the functions that build the hidden phrase. It requires the *letter.js* file which it depends on for its properties and methods. It holds the hidden (underlying) phrase that the user is attempting to guess and two prototype functions from the Letter constructor object.

### index.js
Controls the flow of the player's interactions with the CLI app. It requires *word.js* and the *inquirer* package. This file uses the following functions:
* __initialize__. initializes the relevant variables.
* __getInput__. Handles the user input for guessing the hidden phrase.
* __processInput__. Compares the player's input against the hidden phrase. Sets the match property, and displays the result to the player.
* __checkMatches__. Checks to determine if all letters have been matched. 
* __guessLetter__. A separate function for guessing a single letter, as per the player's choice.
* __guessPhrase__. A separate function for guessing the whole phrase, as per the player's choice.
* __playAnother__. Prompts the user whether they wish to continue playing. 

## Author
Alan Leverenz