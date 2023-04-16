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
    


