
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

