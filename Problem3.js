// Write a JavaScript program to check from three given integers that whether a number is greater than or equal to 20 and less than one of the others.



function num(a,b,c){
    if(a>=20 && (a<b||a<c)){
        return a;
    }
    else if(b>=20 && (b<a || b<c)){
        return b;
    }
    else if(c>=20 && (c<a || c<b)){
       return c;
    }
    else{
        return false;
    }
}

console.log(num(24,18,7))

