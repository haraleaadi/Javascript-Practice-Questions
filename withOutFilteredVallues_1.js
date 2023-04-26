// Write a JavaScript program to filter out the specified values from a specified array. Return the original array without filtered values :


//Solution - 1
function noFilteredValue(numberList){
    const notFilteredValue = []
    for(let i=0; i<numberList.length; i++)
    {
        if(numberList[i]%2 == 0)
        {

        }
        else{
            notFilteredValue.push(numberList[i])
        }
    }
    return notFilteredValue
}
console.log(noFilteredValue([1,2,3,4,5,6,7,8,9]))


//Solutiion - 2
function notFiltered(numbers){
  let list = numbers.filter((el)=>{
    if(!(el%2 == 0))
    {
        return el
    }
  })
  return list
}
console.log(notFiltered([1,2,3,4,5,6,7,8,9]))