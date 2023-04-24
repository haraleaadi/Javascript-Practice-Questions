// Write a JavaScript program to compute the sum of all digits that occur in a given string:

function sumOfDigits(characters){
    let sum = 0
    
    for(let i=0; i<characters.length; i++)
    {
        if(!(isNaN(characters[i])))
        {
            sum = sum + Number(characters[i])
        }
    }
    return sum
}

console.log(sumOfDigits('aasafsa324fdasv56sda'))