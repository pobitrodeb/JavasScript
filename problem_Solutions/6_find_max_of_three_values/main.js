// Basic Solution 

function getChiking(firstNumber, secoundNumber, thirdNumber)
{
    if(secoundNumber < firstNumber && thirdNumber < firstNumber)
    {
        console.log(firstNumber, 'is begier than', secoundNumber, thirdNumber)
    }
    else if(firstNumber > secoundNumber && thirdNumber > secoundNumber)
    {
        console.log(secoundNumber, 'is begier than', firstNumber, thirdNumber)
    }
    else 
    {
        console.log(thirdNumber, 'is begier than', firstNumber, secoundNumber)
    }
}

var inputNumber = getChiking(45,54,84); 
console.log(inputNumber); 


// If you are want to  math 
var firstNumber = 23; 
var secoundNumber = 34; 
var thirdNumber = 45; 
var chekingBigNumber = Math.max(firstNumber, secoundNumber, thirdNumber); 
console.log(chekingBigNumber); 