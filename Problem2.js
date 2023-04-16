// Write a JavaScript program to change the capitalization of all letters in a given string.

//Solution - 1
let fname="Aaditi"
    // let fullname="Aaditi Harale"

    let u = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let l = "abcdefghijklmnopqrstuvwxyz"
    let res=''
    for(let i=0; i<fname.length;i++)
    {
        for(let j=0;j<u.length;j++)
        {
            if(fname[i]==l[j])
            {
                res=res+u[j]
            }
            if(fname[i]==u[j])
            {
                res=res+u[j]
            }
        }
    }
    console.log(res);

     //Solution - 2
    // string convert into Uppercase using ES6

    function lowerToUpper(name){
        return name.toUpperCase()
    }

    console.log(lowerToUpper("shilpa"))