// fibonacci number with temporary variable

function fibonacci(givenNumber){
    let n1 = 0 
    let n2 = 1
    let temporary ;
    let series = []
    for(let i=0; i<=givenNumber; i++)
    { 
        temporary = n1 + n2
        n1 = n2
        n2 = temporary
         series.push(n2)
    }
    return series
}

console.log(fibonacci(5))