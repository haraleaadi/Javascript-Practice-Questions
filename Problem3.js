// Filtered string from given array :

// Solution - 1

let listOfString = []
function findString(arrayList){
     for(let i=0; i<arrayList.length; i++)
     {
        if(isNaN(arrayList[i]))
        {
            listOfString.push(arrayList[i])
        }
     }
     return listOfString
}
console.log(findString(["S",8,"LMN",90,45,"PQR","ABC",3,"P",67]))


// Solution - 2

let list = []
function arrayOfString(array){
    array.forEach((el)=>{
        if(isNaN(el))
        {
            list.push(el)
        }
    })
    return list
}
 console.log(arrayOfString(["A","d",0,"i",3,8,"t",7,"i",9]))

 //Solution - 3

 function string(numAndString){
    let listOfSelectedString = numAndString.filter((e)=>{
        if(Number.isInteger(e) == false)
        {
            return e
        }
    })
    return listOfSelectedString;
 }

 console.log(string([3,"y",6,0,"h",2,"e"]))