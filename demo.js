function counter(number,array){

    let result = [number]
   for(let i=1; i<array.length; i++)
   {
        result.push(number+i)
   }
   return result
}
console.log(counter(5,["a","a","a","a","a"]))

// [5,6,7,8,9]
//[2,3,4,5,6]