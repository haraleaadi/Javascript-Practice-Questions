//Check Armstrong number of three digits

function amstrong(number){

    let array =[];
    let sum = 0;
    for(let i=0; i<number.length; i++)
    {
        array.push(number[i] * number[i] * number[i]) 
    }
    for(let j=0; j<array.length; j++)
    {
        sum = sum + array[j]
    }
    if(sum == number)
    {
        return "It is a Amstrong Number"
    }
    else{
        return "It is not a Amstrong Number"
    }
}

console.log(amstrong('153'))