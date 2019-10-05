
// Word.js: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:
// An array of new Letter objects representing the letters of the underlying word
// A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
// A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)

//export the file

export {makeString};
export {makePhrase};

require (Letter.js);

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
