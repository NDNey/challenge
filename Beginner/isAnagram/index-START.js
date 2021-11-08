/* CHALLENGE
Given a two strings, write an algorithm to check if they are anagrams
of each other. Return true if the pass the test and false if they
don't. E.g
    isAnagram('silent', 'listen') // should return true
*/



function isAnagram(stringA, stringB) {
  a = stringA.toLowerCase().split('').filter(e => e.match(/[a-z]/g)).sort().join('')
        b = stringB.toLowerCase().split('').filter(e => e.match(/[a-z]/g)).sort().join('')

  return  a == b 
}


module.exports = isAnagram