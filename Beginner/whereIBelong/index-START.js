/*
Return the lowest index at which a value (second argument) should be
inserted into an array (first argument) once it has been sorted. The
returned value should be a number. E.g

whereIBelong([1,2,3,4], 1.5) // should return 1 because it is greater
than 1(index 0), but less than 2(index 1).
*/


function whereIBelong(arr, num) {
   // checks numbers instead of strings
   arr.sort((a, b) => {
       return a - b
   })
  // checks if arr # is more than provided num
   for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= num) { // if it is, then sends that index pos
           return i
        }
   }
   return arr.length
}


module.exports = whereIBelong