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



