// Write a JavaScript to find the longest string from a given array of strings.

// Solution - 1

let arr = ["aa","aaaa","a","aaaaaaa","aaa"]
let max = ""

function wayone(){
for(let i=0; i<arr.length; i++)
{
    for(let j=i+1; j<arr.length; j++)
    {
        if(arr[i].length>arr[j].length)
        {
           max = arr[i]
        }
    }
}
console.log(max)
}
wayone()


// Solution - 2
function secondWay(){
arr.forEach((el)=>{
    if(el.length>max.length)
    {
        max=el
    }
})
console.log(max)
}
secondWay()




