# Constructor-Word-Guess
A Word Guess command-line game using constructor functions.

## What node app does
Constructor-Word-Guess is a browser-less Node.js Command Line Interface application that utilizes the *inquirer* NPM module. The game asks the player to enter letters, one at a time, to complete a hidden phrase. 

## Overview
The game randomly picks from a list of 25 phrases, sourced from a list of over 6,000 Wheel of Fortune hidden phrases used on the show. The player is prompted to enter a letter. If it matches the same letter in the hidden phrase, the letter appears wherever it is positioned in the phrase. 

After 10 guesses, the player can choose to continue guessing single letters or guess the whole phrase. The player is limited to 15 letter guesses. If the player chooses to guess the whole phrase, that is their final attempt to win. Win or lose the player is prompted if they wish to play again.

## How to run the app
Follow these instructions for running the app:
1. Fork the repository from this link: https://github.com/AlanLeverenz/Constructor-Word-Guess.
2. Open Terminal and navigate to your __Constructor-Word-Guess__ repository folder.
3. Use the following syntax after the Terminal prompt:

    `$ node index`

4. You will be prompted to enter a letter. Since there are multiple words in each phrase, a good first character to guess is the spaceband so you can determine the length of each word.

## Technical aspects

In addition to the NPM package files, there are three JS files that node runs. They are:
* letter.js
* word.js
* index.js

__letter.js__. This file has the constructor that holds a letter, a match property, and two functions for comparing the letter with user input and for displaying the phrase to the user. It displays hidden characters as they are guessed. Unmatched characters appear as underscore. 

__word.js__. This file holds the functions that build the hidden phrase. It requires the *letter.js* file which it depends on for its inherited properties and methods. It holds the hidden (underlying) phrase that the user is attempting to guess and two prototype functions from the Letter constructor object.

__index.js__. Controls the flow of the player's interactions with the CLI app. It requires *word.js* and the *inquirer* package. This file uses the following functions:
* initialize
* getInput
* processInput
* checkMatches
* guessLetter
* guessPhrase
* playAnother

## Author
Alan Leverenz

