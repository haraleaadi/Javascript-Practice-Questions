// Write a JavaScript program to find all distinct prime factors of a given integer:
// Input = 36
//Output = 2,3

function primeFactors(number){
    //get factors of given number
    let factorList = []
    
   for(let i=0; i<=number; i++)
   {
     if(number%i == 0)
     {
        factorList.push(i)
     }
   }

   //check which are prime numbers of factorList
   let j=0;
   let final = []
   while(j<factorList.length) 
   {
    let list = []
     for(let n=1; n<=factorList[j]; n++)
     {
        if(factorList[j]%n == 0)
        {
            list.push(n)
        }
     }
     if(list.length == 2)
        {
            final.push(factorList[j])
        }
     j++;
   }
   
   return final
}

console.log(primeFactors(36))