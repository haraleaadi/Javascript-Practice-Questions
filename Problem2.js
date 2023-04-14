// Write a JavaScript program to check whether the first and last elements are equal of a given array of integers length 3.

//First way to solve the problem

function checkEqual (arr){

    if(arr[0] == arr[arr.length-1])
    {
       return true
    }
    else{
        return false
    }
}

let test = checkEqual([3,6,7])

console.log(test)

