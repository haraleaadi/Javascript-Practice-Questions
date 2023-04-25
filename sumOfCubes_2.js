//Write a JavaScript program to compute the sum of cubes of all integer from 1 to a given integer :

//Solution - 1
function sumOfCubes(number){
    let sum = 0;
    let cubeList = []
    for(let i=1; i<=number; i++)
    {
      cubeList.push((i*i)*i)
    }
    for(let j=0; j<cubeList.length; j++)
      {
         sum = sum + cubeList[j]
      }
    return sum
}

console.log(sumOfCubes(6))

//Solution - 2
function cuebRoot(givenNumber){
    let sum = 0;
    let i = 0;
    while(i<=givenNumber)
    {
        sum = sum + ((i*i)*i)
        i++
    }
    return sum
}

console.log(cuebRoot(6))