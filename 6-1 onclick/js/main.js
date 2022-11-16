function mekeRed()
{
    document.body.style.background = 'red';
    document.body.style.color = 'white';
    document.body.style.fontSize = '25px';
}

var blueButton      = document.getElementById('makeGreen'); 
blueButton.onclick  = makeGreenColor; 
function makeGreenColor()
{
    document.body.style.background = 'green'; 
    document.body.style.color = 'red'; 
}