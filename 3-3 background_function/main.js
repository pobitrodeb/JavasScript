function addFuncation(x, y)
{
        var z = x + y; 
        console.log(z);
}

addFuncation(10, 11); 
console.log(addFuncation);

addFuncation(15, 11); 
console.log(addFuncation);


//Create Element 
function divMake(height, width, bg)
{
    var div = document.createElement('div'); 
    div.style.height    = height+'px'; 
    div.style.width     =  width+'px'; 
    div.style.margin    = '15px'
    div.style.backgroundColor = bg; 
    document.getElementById('res').append(div)
}

divMake(100, 180, 'red');
console.log(divMake);

divMake(180, 180, 'green');
console.log(divMake);

divMake(180, 350, 'black');
console.log(divMake);
// HTML Inner Tag Element 

function headinghH1()
{
   var h1 = document.createElement('h1'); 
    h1.innerHTML = 'Thi is Heading Tag';
    h1.style.background = 'black'; 
    h1.style.color = 'white'; 
    document.getElementById('h1').append(h1);
}

headinghH1();
console.log(headinghH1);



// Text change button 
var btn = document.getElementById('textChangeBtn'); 
btn.onclick = function(){
 //alert('Congratulations'); 
  h1.innerHTML = 'Text Change for click';
}


 

