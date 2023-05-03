function threeSum(nums){
    let number = []
    
    for(let i=0; i<nums.length; i++)
    {
        for(let j=i+1; j<nums.length; j++)
        {
            for(let k=j+1; k<nums.length; k++)
            {
               if(nums[i] + nums[j] + nums[k] == 0)
               {
                   number.push([nums[i],nums[j],nums[k]])
               }
            }
        }
    }

    return number
}
console.log(threeSum([-1,0,1,2,-1,-4]))


// function sum(num){
//     let numbers=[...new Set(num)]
    
//     return numbers
// }

// console.log(sum([-1,0,1,2,-1,-4]))

