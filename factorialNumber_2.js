//write program to calculate factorial number :
// Input - number
// Output - Factorial of input number

//Solution - 1
function factorialNumber(number){
    let result = 1;
    for(let i=1; i<=number; i++)
    {
        result = result * i;
    }
    return result;
}

console.log(factorialNumber(7));

//Solution - 2

function factoroal(number1){
    let result = 1;
    let i = 1;
    do{
       result = result * i;
       i++;
    }
    while(i<=number1)
    return result;
}

console.log(factoroal(5));