//Given array of elements can multiply by 3 and return a new array :

//Solution - 1

let result =[]
function numberOfList(numbers,multiplier){
    for(let i=0; i<numbers.length;i++)
    {
        result.push(numbers[i]*multiplier)
    }
    return result
}
console.log(numberOfList([2,3,4,5],3))

//Solution - 2

let listOfMultiplyNumber = []
function ListOfNumber(num,multiplyWith){
    let i = 0;
    while(i<num.length){
        listOfMultiplyNumber.push(num[i]*multiplyWith);
        i++
    }
    return listOfMultiplyNumber;
}
console.log(ListOfNumber([5,9,3,7],5))


//Solution - 3

function multiplyElementOfArray(number,multiplyNumber){
     let multiplicationNumber =  number.map((item)=>{
        return item*multiplyNumber;
      })
      return multiplicationNumber;
}

console.log(multiplyElementOfArray([2,3,4,5],2))
