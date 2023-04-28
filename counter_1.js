// Given an integer, return a function. This function initially returns number and then returns 1 more than the previous value :

function counter(number,array){

    let result = [2]
   for(let i=1; i<array.length; i++)
   {
        result.push(i+2)
   }
   return result
}
console.log(counter(2,["a","a","a","a","a"]))


