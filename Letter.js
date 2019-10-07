// LETTER CONSTRUCTOR ======================

var Letter = function(letter) { 
    this.letter = letter,
    this.match = false,
    this.toString = function() {
        var placeHolder = '_';
        if (this.match === true) {
                return this.letter;
            } else if (this.match === false) {
                return placeHolder;
            }
    },    
    this.compare = function(char) {
    if (this.letter === char.toUpperCase()) {
        this.match = true;
        }
    }
} // end Letter constructor

// export the Letter module
module.exports = {
    Letter: Letter
};

// ---