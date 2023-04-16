// Find factors of given number and return a array :

//Solution - 1

let factor = []
function findFactors(number){
  for(let i=0; i<=number; i++)
  {
     if(number%i == 0)
     {
        factor.push(i)
     }
  }
  return factor;
}

console.log(findFactors(12))

//Solution - 2

let factors = []
function listOfFactor(num){
    let i = 0;
    while(i<=num)
    {
       if(num%i == 0)
       {
         factors.push(i)
       }
       i++;
    }
    return factors;
}

console.log(listOfFactor(50))

