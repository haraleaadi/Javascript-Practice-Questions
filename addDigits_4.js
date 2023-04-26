// Given an integer, repeatedly add all its digits until the result has only one digit, and return it :
//Input - 38
//OutPut - 2


function addDigits(number){
    let x = number.toString();
    let sum = 0 
    
    let final = 0
    for(let i=0; i<x.length; i++)
    {
        sum =sum + Number(x[i])
    }

    let y = sum.toString()

    if(sum.length == 1 )
    {
        return sum
    }
    else{
        for(let j=0; j<y.length; j++)
        {
            final = final + Number(y[j])
        }
    }
    return final
}

console.log(addDigits(578))