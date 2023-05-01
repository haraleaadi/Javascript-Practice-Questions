// print prime number 1 to 100 :

function printPrime(n){
    
    let listOfPrime = [];
    let i= 1;
    while(i<=n)
    {
        let result =[];
        for(let j=1; j<=i; j++)
        {
            if(i%j == 0)
            {
                result.push(j)
            }
        }
        if(result.length == 2)
        {
            listOfPrime.push(i)
        }
        
       i++;
    }
    return listOfPrime;
}

console.log(printPrime(100))