
//Write a JavaScript program to get the largest even number from an array of integers:

//Solution - 1
function largestEven(listOfNumbers){
    let evenNoList = []
    let largeEven = listOfNumbers[0];
    for(let i=0; i<listOfNumbers.length; i++)
    {
        if(listOfNumbers[i]%2 == 0)
        {
            evenNoList.push(listOfNumbers[i])
        }
    }
    for(let j=0; j<evenNoList.length; j++)
    {
        if(largeEven<evenNoList[j])
        {
            largeEven = evenNoList[j]
        }
    }
   return largeEven
}

console.log(largestEven([2,3,5,6,7,9,8]))

//Solution - 2

function evenNumber(numbers){
   let list = numbers.filter((el)=>{
        if(el%2 == 0)
        {
            return el
        }
    })
   list.sort((a,b)=>{return b-a});
   return list[0]
}
console.log(evenNumber([1,16,24,4,6,9,2]))


// Given an array of integers, determine whether the sum of its elements is even or odd :

function evenOdd(numbers){
    let sum = 0;
    
    for(let i=0; i<numbers.length; i++)
    {
        sum = sum + numbers[i];
    }
    if(sum%2 == 0 )
    {
        return "Even";
    }
    else{
        return "Odd"; 
    }
}
console.log(evenOdd([2,4,6,8]))

function sumIsOddOrEven(array){
    let total = 0;
    let i=0;
    while(i<array.length)
    {
        total = total + array[i];
        i++
    }
    if(total%2 == 0)
    {
        return "Total of array of integers is Even"
    }
    else{
        return "Total of array of integers is Odd "
    }
}

console.log(sumIsOddOrEven([3,5,6,7]))


// Write a JavaScript program to create new string with first 3 characters are in lower case from a given string. If the string length is less than 3 convert all the characters in upper case.


function createString(test){
  if(test.length>=3)
  {
    // return test.charAt(0).toLowerCase() + test.charAt(1).toLowerCase() + test.charAt(2).toLowerCase();
    return test.substring(0,2).toLowerCase() + test.substring(2)
  }
  else{
    return test.toUpperCase()
  }
}
let result = createString("ABC, PQR, XYZ")
console.log(result)


// Filtered string from given array :

// Solution - 1

let listOfString = []
function findString(arrayList){
     for(let i=0; i<arrayList.length; i++)
     {
        if(isNaN(arrayList[i]))
        {
            listOfString.push(arrayList[i])
        }
     }
     return listOfString
}
console.log(findString(["S",8,"LMN",90,45,"PQR","ABC",3,"P",67]))

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


let list = []
function arrayOfString(array){
    array.forEach((el)=>{
        if(isNaN(el))
        {
            list.push(el)
        }
    })
    return list
}
 console.log(arrayOfString(["A","d",0,"i",3,8,"t",7,"i",9]))

 //Solution - 3

 function string(numAndString){
    let listOfSelectedString = numAndString.filter((e)=>{
        if(Number.isInteger(e) == false)
        {
            return e
        }
    })
    return listOfSelectedString;
 }

 console.log(string([3,"y",6,0,"h",2,"e"]))
 
 
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



