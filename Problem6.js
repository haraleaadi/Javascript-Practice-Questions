//Write a JavaScript program to create a new array taking the middle elements of the two arrays of integer and each length 3.

let result = []
function middleElement(number1,number2){
    result.push(number1[number1.length/2],number2[number2.length/2])
    return result;
}

console.log(middleElement([4,7,8,9,5,3],[1,4,6,5,3,2]))