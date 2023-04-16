//Sum Of Odd Numbers from given array :

//Solution -1
function sumOfOdd(arrayOfNumbers){
    let sum =0;
    for(let i=0; i<arrayOfNumbers.length; i++)
    {
        if(arrayOfNumbers[i]%2 !== 0)
        {
           sum = sum + arrayOfNumbers[i];
        }
    }
    return sum;
}

console.log(sumOfOdd([2,5,6,9,7,8]))

//Solution - 2

function sumOfNumbers(number){
    let sum = 0;
    let i = 0;
    while(i<number.length){
        if(number[i]%2 !== 0)
        {
            sum = sum + number[i]
        }
        i++
    }
    return sum;
}

console.log(sumOfNumbers([4,1,3,6,9,7]))

//Solution - 3

function oddNumberAddition(listOfNumber){
    let sum = 0;
    listOfNumber.forEach((el)=>{
       if(el%2 !== 0)
       {
         sum = sum + el
       }
    })
    return sum;
}
console.log(oddNumberAddition([7,3,4,1,2,6,5]))

//Solution - 4

function additionOfNumbers(numbers){
    let sum = 0;
    numbers.map((e)=>{
        if(e%2 !== 0)
        {
            sum = sum + e;
        }
    })
    return sum;
}

console.log(additionOfNumbers([6,9,5,1,8,3]))