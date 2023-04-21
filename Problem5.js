
// Write a JavaScript program to display the city name if the string begins with "Los" or "New" otherwise return blank.

function checkCity(cityName){
    if(cityName[0] == "L" && cityName[1] == "o" && cityName[2] == "s")
    {
        return cityName;
    }
    else
    {
        return '';
    }
}
console.log(checkCity("Loskop"))

//TestCase :

console.log(checkCity("A"))


// Write a JavaScript program to compute the sum of three elements of a given array of integers of length 3.

// let arr = [3,8,23]
// sum = 0;
// for(let i=0; i<arr.length; i++)
// {
//     sum = sum + arr[i]
// }
// console.log(sum)

function arr(sum){
   return sum[0]+sum[1]+sum[2]
}

console.log(arr([25,35,45]))

