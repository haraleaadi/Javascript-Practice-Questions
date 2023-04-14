// Find minimum and maximum number from given array.

let arr1=[33,78,67,-9,-110,34]

let max=-Infinity
let min=Infinity
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