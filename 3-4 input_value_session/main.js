var btn = document.getElementById('btn')
btn.onclick = function()
{
    var input = document.getElementById('inputValue');
    alert(input.value);
}

var input = document.getElementById('input');
input.onkeyup = function()
{
    document.getElementById('inputValueText').innerHTML = input.value;
}