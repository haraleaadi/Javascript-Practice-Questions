// Given a string to find out the duplicate characters in the string :

//Solve that problem using object

let duplicateCount = {}

 function findDuplicateChar(character){
     for(let i=0; i<character.length; i++)
       {
          let d = character[i]
          if(duplicateCount[d] == undefined)
          {
            duplicateCount[d] = 1;
          }
          else
          {
            duplicateCount[d]++
          }
       }
       return duplicateCount;
}
console.log(findDuplicateChar("adsjfdsfsfjsdjfhacabcsbajda"))


