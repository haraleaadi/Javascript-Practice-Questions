// Given a string s, find the length of the longest substring without repeating characters.
// Input - "pwwkew"
//Output - 3


function longestSubstring(string){

    if(string.length == 0)
    {
        return 0;
    }

    let result = 1;

    for(let i=0; i<string.length; i++)
    {
        let sub = string[i]

        for(let j=i+1; j<string.length; j++)
        {
            if(sub.includes(string[j]))
            {
                break;
            }
            else{
                sub += string[j]
                if(sub.length>=result)
                {
                    result = sub.length
                }
            }
        }
    }
    return result;
}

console.log(longestSubstring("pwwkew"))

