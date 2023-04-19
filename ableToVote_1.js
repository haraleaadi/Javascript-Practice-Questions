// write to tell user if he/she is able to vote :
// Input - age
// Output - able to vot or not.

function ableToVote(age){
    if(age>=18)
    {
        return "He/She is able to Vote!"
    }
    else{
        return "He/She is not able to Vote!"
    }
}
console.log(ableToVote(27))