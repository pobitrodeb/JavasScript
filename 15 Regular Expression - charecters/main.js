// Regular Exrpession 
//Patter Maching Technique 
// Literal and Meta Charecters 


let regularExpression; 
let stringData; 

// Meta Charecter 
regularExpression = /^hello/ ;  // ^ Must Start With 
regularExpression = /hello$/ ;  // $ Must End With 
regularExpression = /h.llo/ ;  //  Must Start with End With 
regularExpression = /h*llo/ ;  //  0 ro more times 
regularExpression = /he?llo/ ;  // optional 


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


// Meta Charecter 
