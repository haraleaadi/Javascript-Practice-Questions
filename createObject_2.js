// convert two array into object

//Solution - 1
function twoArray(key,value){
    let object = {}

    for(let i=0; i<key.length; i++)
    {
        for(let j=0; j<value.length; j++)
        {
            if(i == j)
            {
               object[key[i]] = value[j]
            }
        }
    }

    return object
}

console.log(twoArray(['name','age','address'],['aaditi',25,'kolhapur']))


//Solution - 2

function createObject(array1,array2){
    const result = {}
    array1.forEach((el,i)=>{
        result[el] = array2[i]
    })
    return result;
}

console.log(createObject(['Project Name','FrontEnd','BackEnd'],['OutReachCircle','React.js','Node.js']))
