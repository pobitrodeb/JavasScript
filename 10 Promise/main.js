//Syantax
// new Promise((resolveOuter) => {
//     resolveOuter(
//       new Promise((resolveInner) => {
//         setTimeout(resolveInner, 1000);
//       }),
//     );
//   });

//   -------------------------------- 
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

function createPerson(person){
   let prom = new Promise(function(reslove, reject){
    allPersons.push(person); 

    let err = true; 

    if(!err)
    {
        reslove();
    }else
    {
        reject("Data Error something is error"); 
    }


    reslove(); 
   });
   return prom; 
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
createPerson({"name": "keyamoni", "depatment": "love"}).then(getData); 
