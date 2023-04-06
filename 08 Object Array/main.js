// Delcear 
var arr = [10, 23, ['a', 'b', 'c']]; 
// console.log(typeof(arr)); 
// console.log ('this is fist data ' + arr[1]);    // fist data 
// console.log('this is secound data ' + arr[2]);    // secound data 
// console.log('this is secound data with object ' + arr[2][1]); // secound data with object 


// Multi array's object data
var multiArry = [ 1,2,["a", ["a1", "a2"], "b"], 3,["b1","b2"]];

 console.log(multiArry[0]); 
//Result : 1
 console.log(multiArry[1]); 
//Result : 2
 console.log(multiArry[2]);
//Result : (3) ['a', Array(2), 'b']
 console.log(multiArry[2][0]);
//Result : a
 console.log(multiArry[2][1][0]);
//Result : a1
 console.log(multiArry[2][1][1]);
//Result : a2
 console.log(multiArry[3]);
//Result : 3
 console.log(multiArry[4]);
//Result : (2) ['b1', 'b2']
 console.log(multiArry[4][0]);
//Result : b1
 console.log(multiArry[4][1]);                   
//Result : b2


// 
