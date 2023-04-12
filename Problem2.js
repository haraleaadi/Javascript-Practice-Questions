//Write a JavaScript program to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.

function twoRanges(a,b){
    if((a>=40 && b>=40 && a<=60 && b <= 60) || (a>=70 && b>=70 && a<=100 && b<=100))
    {
      return true;
    }
    else{
     return false;
    }
 }
 
 console.log(twoRanges(90,80))