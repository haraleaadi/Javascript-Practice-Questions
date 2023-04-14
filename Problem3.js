// Given an array of numbers find the average of all the even numbers.

// First way to solve the problem

let arr = [5,3,6,4,2,7]
// console.log(arr[1])
let sum = 0;
let arrLength = arr.length;

function wayOne(){
for(let i=0; i<arr.length;i++)
{
    sum = sum+arr[i]
}
console.log(sum/arrLength)
}
wayOne()


// second way to solve the problem
let arr1 = [5,3,6,4,2,7]
let arrLength1 = arr1.length;

function secondWay(){
let sum = arr1.reduce((acc,el)=>{
    return acc+el
})

console.log(sum/arrLength1)
}

secondWay()