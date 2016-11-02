// function countLetters(str)  {
//   var characters = str.split(' ').join('');
//   var objectArray = {}

//   for (var i = 0; i < characters.length; i++) {
//     // for (char of characters)  {
//       if (objectArray[characters[i]]) {
//       objectArray[characters[i]] += 1;
//     } else {
//       objectArray[characters[i]] = 1;
//     }
//   }
//   return objectArray;
// }
// console.log(countLetters("loopy lighthouse"));
function returnIndices(str)  {
  var characters = str.split(' ').join('').split('');
  var tally = {}
  characters.forEach(function(char, i)  {
      if (!tally.hasOwnProperty(char)) { //char !== tally.char)  {
        tally[char] = [i];
      } else {
        tally[char].push([i]);
       }
  })
 return tally;
}
console.log(returnIndices("mapleleafs"));
  // var i = 0;

   //  for (char of characters)  {
   //    if (objectArray[characters[i]]) {
   //    objectArray[characters[i]] += 1;
   //    i ++;
   //  } else {
   //    objectArray[characters[i]] = 1;
   //    i ++;
   //  }
   // }
  // var index = [];
  // var currentChar = characters[i];
  // var search = characters.indexOf(currentChar);

      //if ()
      // if (char == tally.char)  {
      //   tally[char].push(i);
      // } else {
      //   tally[char] = i;
      // }

    // console.log(char, i)


    // for (var char in characters)  {
    //   var occurrences = characters[char];
    //   if (characters.hasOwnProperty(char)) {
    //   objectArray[characters[i]] += char;
    // }
    // }


    // hasOwnProperty

//  })

    // for (i = 0; i < characters.length; i++) {
    // index.push(search);
    // search = characters.indexOf(currentChar, search += 1);
    // }

// console
// {
//   c: [0],
//   o: [1, 4],
//   n: [2],
//   s: [3],
//   l: [5],
//   e: [6],
// }





/*
Using indexOf()

The following example uses indexOf() to locate values in an array.

var array = [2, 9, 9];
array.indexOf(2);     // 0
array.indexOf(7);     // -1
array.indexOf(9, 2);  // 2
array.indexOf(2, -1); // -1
array.indexOf(2, -3); // 0
Finding all the occurrences of an element

var indices = [];
var array = ['a', 'b', 'a', 'c', 'a', 'd'];
var element = 'a';
var idx = array.indexOf(element);
while (idx != -1) {
  indices.push(idx);
  idx = array.indexOf(element, idx + 1);
}
console.log(indices);
// [0, 2, 4]
*/