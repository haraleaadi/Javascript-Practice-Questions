// Given an array of numbers find the average of all the even numbers.

// Solution - 1

let sum = 0;

function wayOne(array){
    let arrLength = array.length;
    for(let i=0; i<array.length;i++)
    {
        sum = sum+array[i]
    }
    return sum/arrLength
}
console.log(wayOne([5,3,6,4,2,7]))


// Solution - 2

function secondWay(array1){
    let arrLength1 = array1.length;
    let sum = array1.reduce((acc,el)=>{
        return acc+el
    })
      return sum/arrLength1
    }

console.log(secondWay([5,3,6,4,2,7]))

//Solution - 3

let sumOfNumber = 0;
function thirdWay(array2){
    let array2Length = array2.length;
    let i = 0;
    while(i < array2.length)
    {
        sumOfNumber = sumOfNumber + array2[i]
        i++;
    }
     return sumOfNumber/array2Length
}

console.log(thirdWay([5,3,6,4,2,7]))

//Solution - 4

let sumOfArray = 0
function fourthWay(listOfNumber){
    let listOfNumberLength = listOfNumber.length;
    listOfNumber.map((el)=>{
        return sumOfArray = sumOfArray + el
    })
  return sumOfArray/listOfNumberLength
}

console.log(fourthWay([5,3,6,4,2,7]))
