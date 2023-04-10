
var users = ['liton das', 'Shakib Al Hasan', 'Hero Alam']; 

// we will call 3 param calls  : 
// 1st is eleement,   2nd is param index number, 3rd param is all data 

// users.forEach(function(value, i, all){
//     console.log(value, i, all);
// })


// ============ how to use real life  =================== 
 let allData = function (item, i, all) { 
    console.log(item);
  }

users.forEach(allData);

// Use js template literals

let result = function (item, i)
{
    console.log(`index number is: ${i} and iteam = ${item}` );
}

users.forEach(result);

// more shor cut 
console.log("More ShortCut");

let noCall = users.forEach(function(item, index){
    console.log(item);
})

//// map 

var employee = ['Rajon', 'Rasel', 'Younoch', 'Mobaraak']; 


 var getData =  employee.map(function(iteam){
  return iteam;
})
console.log(getData);

//use literals 
  function addEmployee(iteam)
  {
     return `${iteam} + is a employee`; 
  }

  var mapEmployee = employee.map(addEmployee);
  console.log(mapEmployee);