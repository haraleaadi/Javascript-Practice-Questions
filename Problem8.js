// Create a function that receives an array of numbers and returns an array containing only the positive numbers

// Solution - 1
// Using for Loop
let listOfPositiveNumbers = []
function positiveNumbers(arrayOfNumbers){
     for(let i=0; i<arrayOfNumbers.length;i++)
     {
        if(arrayOfNumbers[i]>=0)
        {
            listOfPositiveNumbers.push(arrayOfNumbers[i])
        }
     }
     return listOfPositiveNumbers;
}

console.log(positiveNumbers([2,-4,8,9,-5,6,3,-1,0]))

//Solution - 2
//Using For Of

let listOfNumbers =[]

function getPositive(numbers){
    for(let item of numbers)
    {
        if(item >= 0)
        {
            listOfNumbers.push(item)
        }
    }
    return listOfNumbers;
}

console.log(getPositive([8,-6,-5,1,0,-4,7]))

//Solution - 3 
//Using filter

function getArrayOfPositive(list){
    let getPositiveList = list.filter((el)=>{
        if(el >= 0)
        {
            return el
        }
    })
    return getPositiveList;
}

console.log(getArrayOfPositive([-6,-8,7,5,-1,9]))