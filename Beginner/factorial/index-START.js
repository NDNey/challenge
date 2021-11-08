/*
Write a function that returns the factorial of 
the provided integer(n). E.g
    factorial(5) // should return 120
*/

function factorial(num) {
    if (num === 0 || num === 1){
        return 1
    }
    
    for(let i = num - 1; i >= 1; i--){
        num *= i
    }
    return num
}



module.exports = factorial

