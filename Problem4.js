// Write a JavaScript program to find the smallest prime number strictly greater than a given number:


function prime(num){
    let i = num + 1;
while (true) {
    let result = [];
  for (let n = 1; n <= i; n++) 
  {
    if (i % n == 0) {
      result.push(n);
    }
  }
  // console.log(result)
  if (result.length == 2) 
    {
        break;
    }
  i++;
}
return i;
}
console.log(prime(53))

