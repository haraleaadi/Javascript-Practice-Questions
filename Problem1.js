// Write a JavaScript to find the longest string from a given array of strings.

let arr = ["aa","aaaa","a","aaaaaaa","aaa"]
let max = ""

// for(let i=0; i<arr.length; i++)
// {
//     for(let j=i+1; j<arr.length; j++)
//     {
//         if(arr[i].length>arr[j].length)
//         {
//            max = arr[i]
//         }
//     }

// }
arr.forEach((el)=>{
    if(el.length>max.length)
    {
        max=el
    }
})
console.log(max)




