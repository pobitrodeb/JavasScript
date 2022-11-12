function getFactorialNumber(number)
{
    var factorial = 1; 
    for( i = 1; i <= number; i++)
    {
       factorial = factorial * i; 
    }
    return factorial;
}

var numberValue = getFactorialNumber(7); 
console.log(numberValue);