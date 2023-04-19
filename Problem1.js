// Print the sum of all the multiples of 3 :

//Solution - 1
function sumOfMultiples(array){
    let sum = 0
    for(let i=0; i<array.length; i++)
    {
        if(array[i]%3 == 0)
        {
            sum = sum + array[i]
        }
    }
    return sum
}
console.log(sumOfMultiples([2,5,3,7,6,4,9]))

//Solution - 2
function multipleOfThree(numbers){
    let total = 0;
    numbers.forEach((el)=>{
        if(el%3 == 0)
        {
           total = total + el;
        }
    })
    return total;
}

console.log(multipleOfThree([1,6,7,8,5,3]))

//Solution - 3
function sumOfNumber(array1){
    let sum = 0;
    array1.filter((e)=>{
       if(e%3 == 0)
       {
         return sum = sum + e
       }
    })
    return sum
}

console.log(sumOfNumber([3,5,6,12,8,9]))