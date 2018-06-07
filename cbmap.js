var words = ["ground", "control", "to", "major", "tom"];

function map(arr, func) {
    var result = [];

    for (var i = 0; i < arr.length; i++){
        var singleItem = func(arr[i]);
        result.push(singleItem)
    }
    console.log(result);
    return result; 
}



//Example calls:
map(words, function(word) {
   return word.length;
 });

 map(words, function(word) {
   return word.toUpperCase();
 });

map(words, function(word) {
   return word.split('').reverse().join('');
 });

//Expected output:
// [6, 7, 2, 5, 3]

// [ "GROUND", "CONTROL", "TO", "MAJOR", "TOM" ]

// [ 'dnuorg', 'lortnoc', 'ot', 'rojam', 'mot' ]