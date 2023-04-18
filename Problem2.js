// Write a JavaScript program that takes two integers and a divisor. If the given divisor divides both integers and it does not divide either, then two given integers are similar. Check whether two given integers are similar or not :

function twoInteger(x,y,divisor){
    let a = x%divisor;
    let b = y%divisor;
    
    if(a == b)
    {
        return true;
    }
    else{
        return false
    }
}

console.log(twoInteger(2,5,2))