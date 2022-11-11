function checking(number)
{
    if(number % 2 == 0)
    {
        console.log(number, 'is even number');
        
    }
    else 
    {
        console.log(number, 'is odd number'); 
        return true; 
    }
    return checking; 
}

var inputValue = 550; 
var output = checking(inputValue); 
console.log(output); 