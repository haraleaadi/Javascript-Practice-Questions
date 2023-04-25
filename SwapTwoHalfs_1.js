// Write a JavaScript program to swap two halves of a given array of integers of even length :
// Input - [1,2,3,4,5,6]
// Output - [4,5,6,1,2,3]


function swapTwoHalves(numbers){
    let first = []
    let second = []
    for(let i=0; i<=(numbers.length-1)/2; i++)
    {
        first.push(numbers[i])
    }
    for(let j=(numbers.length)/2; j<=numbers.length-1; j++)
    {
        second.push(numbers[j])
    }
    if(numbers.length%2 != 0)
    {
        return false
    }
     
    let result = second.concat(first)
    return result
}

console.log(swapTwoHalves([1,2,3,4,5,6,7,8]))