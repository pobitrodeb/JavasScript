// Regular Exrpession 
//Patter Maching Technique 
// Literal and Meta Charecters 


let regularExpression; 
let stringData; 

regularExpression = /hello world/ ; 
stringData = "hello world";

function reTest(regularExpression, stringData)
{
    if(regularExpression.test(stringData)){
        console.log(`${stringData} Matches ${regularExpression.source}` );
    }else{
        console.log('does not matched');
    }
    
}

reTest(regularExpression,stringData);