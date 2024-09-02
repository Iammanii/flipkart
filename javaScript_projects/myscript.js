var guessnumber =document.getElementById("guessnumber") 
var Result =document.getElementById("Result")

var randamnumber =Math.floor(Math.random()*10)+1
var enterdnumber = guessnumber.value
function check()
{
    
    if(randamnumber== enterdnumber)
    {
        console.log("Correct")
        Result.textContent="Correct"
        console.log(Result.style.backgroundColor="red")
        alert("You are guess the correct out put")
    }
    else{
        console.log("Anser is wrong")
        Result.textContent="not corect"
        console.log(Result.style.backgroundColor="green")
        alert("You are guess the not correct out put")
    }
}
