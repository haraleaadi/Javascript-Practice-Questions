
// let string =""
// for(let i=1; i<=5; i++)
// {
//     for(let j=1; j<=i; j++)
//     {
//        string += "*"
//     }
//     string += "\n"
// }

// console.log(string)



let star =""

for(let i=1; i<=6; i++)
{
    // Printing spaces
    for(let j=1; j<=6-i; j++)
    {
        star += "  "
    }
    //Printing star
    for(let n=1; n<i+1; n++)
    {
         star += "*"
         star += "   "
    }
  star += "\n"
}

for(let i=1; i<=6; i++)
{
    for(let j=1; j<=i; j++)
    {
        star += "  "
    }
    for(let k=1; k<6-i+1; k++)
    {
        star += "*"
        star += "   "
    }
    star += "\n"
}

console.log(star)