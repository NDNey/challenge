/* CHALLENGE
Given a two strings, write an algorithm to check if they are anagrams
of each other. Return true if the pass the test and false if they
don't. E.g
    isAnagram('silent', 'listen') // should return true
*/



function isAnagram(stringA, stringB) {
    stringA = stringA.toLowerCase()
    stringB = stringB.toLowerCase()

  return  stringA.split('').sort() == stringB.split('').sort()
}


module.exports = isAnagram