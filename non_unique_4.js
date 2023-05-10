// Write a JavaScript program to filter out non-unique values in an array :

//Solution - 1
function nonUnique(listOfNumbers){
    let result ={}
    let final = []

   for(let i=0; i<=listOfNumbers.length-1; i++)
   {
    let n = listOfNumbers[i]
        if(result[n] == undefined)
        {
            result[n] = 1;
        }
        else{
            result[n]++
        }
   }
   for(key in result)
   {
        if(result[key] == 1)
        {
            final.push(Number(key))
        }
   }
    return final
}

console.log(nonUnique([1,2,3,2,3,4]))


// Solution - 2
function unique(numbers){
  
    const result = numbers.filter((el)=>{
       return numbers.indexOf(el) === numbers.lastIndexOf(el)
    })
    return result
}
console.log(unique([1,2,2,3,4,4]))



