document.getElementById('getData').addEventListener('click', getData);

function getData()
{
    fetch('https://jsonplaceholder.typicode.com/todos/')
    .then(function(res){
        // console.log(res.text())
        // console.log(res.json())
        return res.json(); 
    })

    .then(function(data){
        console.log(data)
    })
}