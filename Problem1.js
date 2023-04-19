
// Write a JavaScript program to find the larger value between the first or last and set all the other elements with that value. Display the new array.

//First way to solve the problem
    function largestNum(num){

        let result = num[0] > num[3] ? num[0] : num[3]
         
        num[0] = result;
        num[1] = result;
        num[2] = result;
        num[3] = result;
        
           return num;
    }
    console.log(largestNum([4,7,5,9]))


//Second way to sovle the problem

    function largeNumber(numbers){
        let max = Math.max(...numbers)
         let maxNumber = numbers.map((el)=>{
            return max
        })
        return maxNumber
    }
    console.log(largeNumber([4,5,6,7]))
    


// Print the sum of all the multiples of 3 :

//Solution - 1
function sumOfMultiples(array){
    let sum = 0
    for(let i=0; i<array.length; i++)
    {
        if(array[i]%3 == 0)
        {
            sum = sum + array[i]
        }
    }
    return sum
}
console.log(sumOfMultiples([2,5,3,7,6,4,9]))

//Solution - 2
function multipleOfThree(numbers){
    let total = 0;
    numbers.forEach((el)=>{
        if(el%3 == 0)
        {
           total = total + el;
        }
    })
    return total;
}

console.log(multipleOfThree([1,6,7,8,5,3]))

//Solution - 3
function sumOfNumber(array1){
    let sum = 0;
    array1.filter((e)=>{
       if(e%3 == 0)
       {
         return sum = sum + e
       }
    })
    return sum
}

console.log(sumOfNumber([3,5,6,12,8,9]))


//Write a JavaScript program to check whether two arrays of integers of same length are similar or not. The arrays will be similar if one array can be obtained from another array by swapping at most one pair of elements.

function similarArray(array1,array2){
    let test = array1[0]
    array1[0] = array2[0] 
    array2[0] = test
    
            if(array1[0] == array2[0])
            {
                return true ; 
            }
            else{
                return false ;
            }
}
console.log(similarArray([1,3,5,7],[2,3,5,7]))


//Write a JavaScript program to find a value which is nearest to 100 from two different given integer values.

function nearest(x,y){
    let one = 100 - x;
    let two = 100 - y;
    if(one<two)
    {
      return x;
    }
    else{
     return y;
    }
 }
 
 console.log(nearest(40,70))


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

// Write a JavaScript to find the longest string from a given array of strings.

// Solution - 1

let arr = ["aa","aaaa","a","aaaaaaa","aaa"]
let max = ""

function wayone(){
for(let i=0; i<arr.length; i++)
{
    for(let j=i+1; j<arr.length; j++)
    {
        if(arr[i].length>arr[j].length)
        {
           max = arr[i]
        }
    }
}
console.log(max)
}
wayone()


// Solution - 2
function secondWay(){
arr.forEach((el)=>{
    if(el.length>max.length)
    {
        max=el
    }
})
console.log(max)
}
secondWay()








