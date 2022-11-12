function arrayTotal (numbers)
{
    sum = 0 ; 

    for (var i = 0; i < numbers.length; i++)
    {
        var arryElement = numbers[i]; 
        sum = sum + arryElement; 
        return sum; 
    }
}


var total = arrayTotal([15,4451,5451541,]); 
console.log(total); 