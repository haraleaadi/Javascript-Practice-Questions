//Ask user to their salary and year of service if service more then 5 year they got 5% bonus and print net bouns amount :
// Input - salary and years of service
// Output - bonus


function getBonusOrNot(salary,yearsOfService){
    let bonus = 5 * salary/100;

    if(yearsOfService > 5)
    {
        return bonus;
    }
    else{
        return "Does not completed 5 years in Service!!"
    }
}

console.log(getBonusOrNot(20000,4))
