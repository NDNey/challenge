/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/


function vowelsCounter(text) {
    text = text.toLowerCase()
    let answer = 0
    for(let i = 0; i < text.length; i++){
        if(text[i] == 'a'||text[i] == 'e'|| text[i] == 'i'||text[i] == 'o'||text[i] == 'u'){
            answer++
        }
    }
    return answer
}



module.exports = vowelsCounter;
