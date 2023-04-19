// Calculate average of given array :

//Solved this Problem using callback function
function sumOfIntegers(num){
    let sum = 0;
    for(let i=0; i<num.length; i++)
    {
        sum = sum + num[i]
    }
    return sum
}
function average(listOfNumbers,callback){
    let sum = callback(listOfNumbers)
    let result = sum/listOfNumbers.length
    return result;
}

console.log(average([2,6,8,7,0,4],sumOfIntegers))