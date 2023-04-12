// Write a JavaScript program to create new string with first 3 characters are in lower case from a given string. If the string length is less than 3 convert all the characters in upper case.


function createString(test){
  if(test.length>=3)
  {
    // return test.charAt(0).toLowerCase() + test.charAt(1).toLowerCase() + test.charAt(2).toLowerCase();
    return test.substring(0,2).toLowerCase() + test.substring(2)
  }
  else{
    return test.toUpperCase()
  }
}
let result = createString("ABC, PQR, XYZ")
console.log(result)

