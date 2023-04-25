// fizzbuzz program find multiple of (3 and 5)
// Input - number from 1 to 5
// Output - 1,2,Fizz,4,Buzz


function fizzBuzz(number){
    let result = []
    for(let i=1; i<=number; i++)
    {
        if(i%3==0 && i%5==0)
        {
            result.push("FizzBuzz")
        }
        else if( i % 5 == 0)
        { 
            result.push("Buzz")
        }
        else if( i % 3 == 0)
        {
            result.push("Fizz") 
        }
        else{
            result.push(i)
        }
    }

    return result
}

console.log(fizzBuzz(15))