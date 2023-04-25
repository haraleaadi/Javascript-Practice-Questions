// Write a JavaScript program to remove all characters from a given string that appear more than once :


function removeMore(element){

    let object = {}
    let newString = ''

    for(let i=0; i<element.length; i++)
    {
       let n = element[i]
        if(object[n] == undefined)
        {
            object[n] = 1;
        }
        else{
            object[n]++
        }
    }

    for(key in object)
    {
        if(object[key] == 1)
        {
           newString = newString + key
        }
    }
   return newString
    
}

console.log(removeMore('ABCASCBGYHBCA'))

