/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/



function longestWord(text) {
    let arr = text.split(' ').sort((a,b) => a.length - b.length)
    return arr[arr.length - 1]
}

module.exports = longestWord