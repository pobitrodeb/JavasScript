
// setTimeout(function(){
//     console.log('hello world');
// }, 5000)  //5000 is loading time 

/// Real life Call Back Function Uses 

let allPersons  = [
    {"name": "pobitro deb", "depatment": "CSE"},
    {"name": "pobitro deb", "depatment": "CSE"},
    {"name": "pobitro deb", "depatment": "CSE"},
    {"name": "pobitro deb", "depatment": "CSE"},
];

function createPerson(person, callback){
   setTimeout(function() {
     allPersons.push(person) // add new person 

   }, 1000);
}

// show view file for this function 
function getData(){
    setTimeout(function(){
        let outputData = ''; 
        allPersons.forEach(function(iteam){
            outputData += `<li> ${iteam.name}</li>`;
            document.getElementById('showData').innerHTML = outputData; 
        })

    }, 4000);
}

/// add person 
createPerson({"name": "keyamoni", "depatment": "love"},getData); 
// call back funtion 
getData()