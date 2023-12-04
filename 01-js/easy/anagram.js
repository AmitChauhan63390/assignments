/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {

  const cleanStr1 = str1.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  const cleanStr2 = str2.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

  // If lengths are different, they can't be anagrams
  if (cleanStr1.length !== cleanStr2.length) {
    return false;
  }

  // Count the frequency of characters in both strings
  const charFrequency1 = {};
  const charFrequency2 = {};

  for (let char of cleanStr1) {
    charFrequency1[char] = (charFrequency1[char] || 0) + 1;
  }

  for (let char of cleanStr2) {
    charFrequency2[char] = (charFrequency2[char] || 0) + 1;
  }

  // Compare the character frequencies
  for (let char in charFrequency1) {
    if (charFrequency1[char] !== charFrequency2[char]) {
      return false;
    }
  }

  return true;


}

module.exports = isAnagram;
