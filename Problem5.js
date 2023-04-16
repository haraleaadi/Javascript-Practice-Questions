// Write a JavaScript program to display the city name if the string begins with "Los" or "New" otherwise return blank.

function checkCity(cityName){
    if(cityName[0] == "L" && cityName[1] == "o" && cityName[2] == "s")
    {
        return cityName;
    }
    else
    {
        return '';
    }
}
console.log(checkCity("Lokop"))

