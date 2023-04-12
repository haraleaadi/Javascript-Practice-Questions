//Write a JavaScript program to find a value which is nearest to 100 from two different given integer values.

function nearest(x,y){
    let one = 100 - x;
    let two = 100 - y;
    if(one<two)
    {
      return x;
    }
    else{
     return y;
    }
 }
 
 console.log(nearest(40,70))