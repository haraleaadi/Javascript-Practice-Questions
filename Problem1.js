// Write a JavaScript program to find the larger value between the first or last and set all the other elements with that value. Display the new array.


    // function largestNum(num){

    //     let result = num[0] > num[3] ? num[0] : num[3]
         
    //     num[0] = result;
    //     num[1] = result;
    //     num[2] = result;
    //     num[3] = result;
        
    //        return num;
    // }
    // console.log(largestNum([4,7,5,9]))



    let num = [4,7,5,8]

     let max=Math.max(...num)   
    // console.log(...num);
    
    let final=num.map((el)=>{
       return max
    })

    console.log(final)

    


