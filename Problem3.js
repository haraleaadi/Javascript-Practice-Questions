// Given an array of integers, determine whether the sum of its elements is even or odd :

function evenOdd(numbers){
    let sum = 0;
    
    for(let i=0; i<numbers.length; i++)
    {
        sum = sum + numbers[i];
    }
    if(sum%2 == 0 )
    {
        return "Even";
    }
    else{
        return "Odd"; 
    }
}
console.log(evenOdd([2,4,6,8]))

function sumIsOddOrEven(array){
    let total = 0;
    let i=0;
    while(i<array.length)
    {
        total = total + array[i];
        i++
    }
    if(total%2 == 0)
    {
        return "Total of array of integers is Even"
    }
    else{
        return "Total of array of integers is Odd "
    }
}

console.log(sumIsOddOrEven([3,5,6,7]))