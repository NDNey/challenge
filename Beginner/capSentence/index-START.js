/* CHALLENGE
Given a sentence containing two or more words, 
return the equivalent of the sentence when capitalised. E.g
  capSentence('the tales of scotch!') // would return 'The Tales Of Scotch!' 
*/

function capSentence(text) {
  text = text.toLowerCase()
  return text.split(' ').map((e, i) =>  e[0].toUpperCase() + e.slice(1)).join(' ') 
}



module.exports = capSentence