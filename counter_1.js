// Given an integer, return a function. This function initially returns number and then returns 1 more than the previous value :

function counter(number,array){

    let result = [number]
   for(let i=1; i<array.length; i++)
   {
        result.push(number+i)
   }
   return result
}
console.log(counter(5,["a","a","a","a","a"]))


