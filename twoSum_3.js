// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target:

var twoSum = function(nums, target) {

    const result = []
    for(let i=0; i<nums.length; i++)
    {
        for(let j=i+1; j<nums.length; j++)
        {
            if(nums[i]+nums[j] == target)
            {
                result.push(i,j)
            }
        }
    }
    return result
};

console.log(twoSum([2,15,11,7],9))