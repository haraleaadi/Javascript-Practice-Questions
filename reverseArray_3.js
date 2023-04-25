//array display to reversed order :

//Solution - 1 
function reverseArray(numbers){
    let result = []
    for(let i=numbers.length-1; i>=0; i--)
    {
       result.push(numbers[i])
    }
    return result
}

console.log(reverseArray([8,7,6,5,4,3,2,1]))

//Solution - 2
function reverse(list){
   let reverseList = list.reverse()
   return reverseList
}

console.log(reverse([5,67,4343,25,6,56,9,2,34,1]))