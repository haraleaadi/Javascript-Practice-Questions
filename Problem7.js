// Write a JavaScript program to check whether a given positive number is a multiple of 3 or a multiple of 7.

// function checkMultipleOf(a){
//    if(a%3 == 0 || a%7 == 0)
//    {
//        return true;
//    }
//    else{
//     return false;
//    }
// }

// let result = checkMultipleOf(10)

// console.log(result)


let numbers = [3,5,6,7,12,15,16,18,21]
let listOfNumbers = numbers.filter((item)=>{
    if(item%3 == 0 || item%7 == 0)
    {
        return true;
    }
    
})

console.log(listOfNumbers)
console.log(listOfNumbers.length)