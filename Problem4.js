//Create a function to concate two integer arrays :

//Solution - 1

function joinArray(array1,array2){
    for(let i=0; i<array2.length; i++)
    {
       array1.push(array2[i])
    }
    return array1
}

console.log(joinArray([2,4,6,7],[5,6,8,2]))

//Solution - 2

function twoArray(number1,number2){
    for(item of number2)
    {
        number1.push(item)
    }
    return number1;
}

console.log(twoArray([3,5,6,8],[4,9,1,6,8]))

//Solution - 3

function concatTwoArray(x,y){
    y.forEach((el)=>{
        x.push(el)
    })
    return x
}
console.log(concatTwoArray([4,6,8,7,9],[2,1,4,6,8]))

//Solution - 4

function concatArrays(num1,num2){
       num2.map((e)=>num1.push(e))
       return num1
}
console.log(concatArrays([7,8,4,2,4],[9,1,4,6,3]))

//Solution - 5

function concatenate(first,second){
    let result = first.concat(second)
    return result;
}

console.log(concatenate([3,5,6,4,2,1],[9,2,6,8,1,5]))