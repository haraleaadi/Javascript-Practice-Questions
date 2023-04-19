
// Write a JavaScript program to find the smallest prime number strictly greater than a given number:


function prime(num){
    let i = num + 1;
while (true) {
    let result = [];
  for (let n = 1; n <= i; n++) 
  {
    if (i % n == 0) {
      result.push(n);
    }
  }
  // console.log(result)
  if (result.length == 2) 
    {
        break;
    }
  i++;
}
return i;
}
console.log(prime(53))


//Create a function to concate two integer arrays :

//Solution - 1

function joinArray(array1,array2){
    for(let i=0; i<array2.length; i++)
    {
       array1.push(array2[i])
    }
    return array1
}

console.log(joinArray([2,4,6,7],[5,6,8,2]))

//Solution - 2

function twoArray(number1,number2){
    for(item of number2)
    {
        number1.push(item)
    }
    return number1;
}

console.log(twoArray([3,5,6,8],[4,9,1,6,8]))

//Solution - 3

function concatTwoArray(x,y){
    y.forEach((el)=>{
        x.push(el)
    })
    return x
}
console.log(concatTwoArray([4,6,8,7,9],[2,1,4,6,8]))

//Solution - 4

function concatArrays(num1,num2){
       num2.map((e)=>num1.push(e))
       return num1
}
console.log(concatArrays([7,8,4,2,4],[9,1,4,6,3]))

//Solution - 5

function concatenate(first,second){
    let result = first.concat(second)
    return result;
}

console.log(concatenate([3,5,6,4,2,1],[9,2,6,8,1,5]))


// Find factors of given number and return a array :

//Solution - 1

let factor = []
function findFactors(number){
  for(let i=0; i<=number; i++)
  {
     if(number%i == 0)
     {
        factor.push(i)
     }
  }
  return factor;
}

console.log(findFactors(12))

//Solution - 2

let factors = []
function listOfFactor(num){
    let i = 0;
    while(i<=num)
    {
       if(num%i == 0)
       {
         factors.push(i)
       }
       i++;
    }
    return factors;
}

console.log(listOfFactor(50))


// Find minimum and maximum number from given array.

let arr1=[33,78,67,-9,-110,34]

let max= arr1[0]
let min= arr1[0]
for(let i=0; i<arr1.length;i++)
{
      if(arr1[i]>max)
      {
        max=arr1[i]
      }
      if(arr1[i]<min)
      {
        min=arr1[i]
      }
}
console.log("Max no :- ",max)
console.log("Min no:- ",min)



