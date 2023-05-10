
function changeString(givenString){
    let lower = givenString.toLowerCase()
    let result = ""
    let changeToUpper = true;

    for(let i=0; i<lower.length; i++)
    {
        if(lower[i] == '?' || lower[i] == ',' || lower[i] == '.')
        {
            changeToUpper = true;
        }
        if(changeToUpper && lower[i].toUpperCase() != lower[i])
        {
            result += lower[i].toUpperCase()
            changeToUpper = false;
        }
        else{
            result += lower[i]
        }
    }
    return result
}

console.log(changeString("Hello World How are you? hey, I Am FINE."))
