

function changeTheString(string){
    let lowerString = string.toLowerCase()
    let result = ""
    result = result + lowerString[0].toUpperCase()

    for(let i=1; i<lowerString.length; i++)
    {
        result += lowerString[i]

        if(lowerString[i] == '?' || lowerString[i] == ',')
        {
            result = result + lowerString[i+2].toUpperCase()
            i=i+2;
        }
    }
    return result
}

console.log(changeTheString("Hello World How are you? Hey, I Am FINE."))



// function changeString(input) {
//     let lower = input.toLowerCase();
//     let result = ''
//     let changeToUpper = true
//     for (let i = 0; i < lower.length; i++) {
//         const element = lower[i];
        
//         if (element == '?' || element == ',' || element == '.') {
//             changeToUpper = true;
//         }
//         if (changeToUpper && element.toUpperCase() !== element) {
//             result += lower[i].toUpperCase();
//             changeToUpper = false;
//         } else {
//             result += element;
//         }
//     }
//     console.log(result);
//     return result;
// }
// changeString("Hello World How are you? Hey, I Am FINE.")