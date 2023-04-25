// Write a JavaScript function that takes an array of numbers and finds the second lowest and second greatest numbers:


function findNumbers(numberList){
    
    let list = numberList.sort((a,b)=>{return a-b});
    const result = [list[1],list[list.length-2]]

    return result
}

console.log(findNumbers([2,3,43,6,1,5]))