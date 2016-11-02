//1.Write a funtion that RETURNS all unique characters that exist in string that is
//  passed into a function
//      1.b Also RETURN number of instances of each letter


function countLetters(str)  {
  var characters = str.split(' ').join('');
  var objectArray = {}
  // var charCount = 1;
  // for (occurences of characters) {
  for (var i = 0; i < characters.length; i++) {
    // for (char of characters)  {
      if (objectArray[characters[i]]) {
      objectArray[characters[i]] += 1;
    } else {
      objectArray[characters[i]] = 1;
    }
  }
  return objectArray;
}
console.log(countLetters("loopy lighthouse"));

  // console.log(character);
  // console.log(objectArray);

// var inputTwo = process.argv.slice(2);
// countLetters(inputTwo[0]);

 // for (var i = 0; i < str.length; i++) {

//   var inputArray = new String (inputString);

//   var splitArray = [inputArray.split('')];

//   return splitArray;


// var obj = { letter, instances};
//var inputArray =
//splitArray.forEach(function(str[i]) { })


// function countLetters(str)  {
//   var characters = str.split('');
//   var objectArray = {}
//   var i = 0;
//   // var charCount = 1;
//   // for (occurences of characters) {
//     for (char of characters)  {
//       if (objectArray[characters[i]]) {
//       objectArray[characters[i]] += 1;
//       i ++;
//     } else {
//       objectArray[characters[i]] = 1;
//       i ++;
//     }
//   }
//   return objectArray;
// }
// console.log(countLetters("mapleleafs"));