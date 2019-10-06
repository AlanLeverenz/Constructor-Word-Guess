// import ('./Letter');
// export {makeString};
// export {makePhrase};


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
