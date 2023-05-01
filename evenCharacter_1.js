//display only even charcter which persent at even index number :

//Solution - 1
function evenCharacter(string){
    let result = []
    for(let i=0; i<string.length; i++)
    {
        if(i % 2 == 0)
        {
          result.push(string[i])
        }
    }
    return result;
}

console.log(evenCharacter(['A','S','H','N','X','W','V','K','G','P']))

//Solution - 2
function character(givenString){
    let even = []
    let i = 0;
    while(i < givenString.length)
    {
        if(i % 2 == 0)
        {
            even.push(givenString[i])
        }
        i++;
    }
    return even;
}
console.log(character(['s','d','f','g','h','j','k','l','p','o','i','u','y']))

//Solution - 3
function charEven(listOfWord){
   characterOfEvenIdex = listOfWord.filter((item, index)=>{
        if(index % 2 == 0)
        {
            return item
        }
    })
    return characterOfEvenIdex
}

console.log(charEven(['a','z','e','t','y']))