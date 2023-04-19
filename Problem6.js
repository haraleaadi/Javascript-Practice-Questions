// Write a JavaScript program to check whether the first and last elements are equal of a given array of integers length 3.

function checkNumber(arr){
    if(arr[0] == arr[arr.length-1])
    {
        return true;
    }
    else 
    {
        return false;
    }
}

console.log(checkNumber([5,6,5]))