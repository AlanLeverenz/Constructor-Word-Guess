// Letter.js: Contains a constructor, Letter. This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. That means the constructor should define:
// A string value to store the underlying character for the letter
// A boolean value that stores whether that letter has been guessed yet
// A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
// A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly

// export the file
export { Letter as default };

// LETTER CONSTRUCTOR

var Letter = function(letter) { 
    this.letter = letter,
    this.match = false
}

// ADD PROTOTYPES

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
    if (this.letter === char) {
        this.match = true;
    }
    // console.log("letter: " + this.letter + ", match: " + this.match);
}
