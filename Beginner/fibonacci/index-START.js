/*
Write a function to return the nth element in Fibonacci sequence,
where the sequence is:
    [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …]
*/


function fibonacci(n) {
    let answer = [0,1]
    if(n > 0){
      for(let i = 1; i < n -1; i++ ){
      answer.push(answer[i] + answer[i-1] )
    }
      return answer
    }else{
      answer = []
      return  answer
    } 
}

module.exports = fibonacci