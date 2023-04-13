
// Given an array of numbers find the average of all the even numbers.

// let arr = [5,3,6,4,2,7]
//console.log(arr[1])
// let sum = 0;
// let arrLength = arr.length;

// for(let i=0; i<arr.length;i++)
// {
//     sum = sum+arr[i]
// }
// console.log(sum/arrLength)

let arr = [5,3,6,4,2,7]
let arrLength = arr.length;

let sum = arr.reduce((acc,el)=>{
    return acc+el
})

console.log(sum/arrLength)