function getlargestNumber (numbers)
{
    for(var i = 0; i < numbers.length; i++)
    {
        var largestNumber = 0; 
        var element = numbers[i]; 
        if(largestNumber < element)
        {
            largestNumber = element; 
        }
    }
    return largestNumber;
}

var inputValue = getlargestNumber([14,154,54,215])
console.log(inputValue); 