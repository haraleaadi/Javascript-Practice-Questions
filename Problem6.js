
//Write a JavaScript program to create a new array taking the middle elements of the two arrays of integer and each length 3.

let result = []
function middleElement(number1,number2){
    result.push(number1[number1.length/2],number2[number2.length/2])
    return result;
}

console.log(middleElement([4,7,8,9,5,3],[1,4,6,5,3,2]))

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

