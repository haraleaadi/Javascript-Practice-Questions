
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

