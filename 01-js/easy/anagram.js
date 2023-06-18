/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {

  var str3 = str1.toLowerCase();
  var str4 = str2.toLowerCase();

  let sortedLetters1 = str3.split('').sort().join('');
  let sortedLetters2 = str4.split('').sort().join('');

  if(sortedLetters1 == sortedLetters2){
    return true;
  }
  return false;
}

module.exports = isAnagram;
