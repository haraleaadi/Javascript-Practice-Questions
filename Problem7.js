// Write a JavaScript program to swap the first and last elements of a given array of integers. The array length should be at least 1.

function swapNumbers(array){
    [array[0],array[array.length-1]] = [array[array.length-1],array[0]]
     return array;
}

console.log(swapNumbers([2,5,6,4]))