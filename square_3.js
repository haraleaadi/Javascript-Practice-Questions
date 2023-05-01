//Take value length and breadth of reactangle from user check it is square or not

function checkSquare(length,breadth){
      let square = (length * breadth);
      if(length == breadth)
      {
        return square;
      }
      else
      {
        return "It is not a Square"
      }
}

console.log(checkSquare(4,5))