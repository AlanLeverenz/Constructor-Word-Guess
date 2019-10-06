// export the file

exports.Poop = function(letter) {
    this.letter = letter;
    this.toString = function() {
        return "My value is " + letter;
    }
}
//==
var poo = require("./poo.js");
var longThing = new poo.Poop("a");
console.log(longThing.toString());

// ---

module.exports = {
    essentials: essentials,
    niceToHaves: niceToHaves
  };
  var stuffINeed = require("./ess.js");
  console.log(stuffINeed);
// ---


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
}
