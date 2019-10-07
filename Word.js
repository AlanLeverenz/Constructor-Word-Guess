// require the Letter constructor
var MyLetter = require("./Letter.js");

// build the phrase string
var makeString = function (arr) {
    console.log('length = ' + arr.length);
    var index = Math.floor(Math.random() * arr.length );
    var str = arr[index];
    return str;
} 

// build the word function
var makePhrase = function (str) {
    var obj = [];
    for ( var i=0; i < str.length ; i++ ) {
        var letter = new MyLetter.Letter(str[i]);
        obj.push(letter);
    }
    return obj;
}

// export the Word module
module.exports = {
    makeString: makeString,
    makePhrase: makePhrase
  };

