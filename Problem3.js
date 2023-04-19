//Write a JavaScript program to get the largest even number from an array of integers:

//Solution - 1
function largestEven(listOfNumbers){
    let evenNoList = []
    let largeEven = listOfNumbers[0];
    for(let i=0; i<listOfNumbers.length; i++)
    {
        if(listOfNumbers[i]%2 == 0)
        {
            evenNoList.push(listOfNumbers[i])
        }
    }
    for(let j=0; j<evenNoList.length; j++)
    {
        if(largeEven<evenNoList[j])
        {
            largeEven = evenNoList[j]
        }
    }
   return largeEven
}

console.log(largestEven([2,3,5,6,7,9,8]))

//Solution - 2

function evenNumber(numbers){
   let list = numbers.filter((el)=>{
        if(el%2 == 0)
        {
            return el
        }
    })
   list.sort((a,b)=>{return b-a});
   return list[0]
}
console.log(evenNumber([1,16,24,4,6,9,2]))
