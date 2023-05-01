// remove duplicate from array and find min and max number :

function duplicate(list){
    let numbers = []
    for(let i=0; i<list.length; i++)
    {
        if(!(numbers.includes(list[i])))
        {
            numbers.push(list[i])
        }
    }
    let sortNumbers = numbers.sort((a,b)=>{return a-b})
    let min = sortNumbers[0]
    let max = sortNumbers[sortNumbers.length-1]

   return[min ,max]
}

console.log(duplicate([9,3,6,1,8,9,3,4,5,5,1]))

