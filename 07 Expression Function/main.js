//Normal Function 

function something(firstParam)
{
  console.log("Call Somethins Funcation " + firstParam);
}
something("index0"); 

//Expression Function 

let something1 = function(secoundParams)
{
  console.log("Call Somethins Funcation " + secoundParams);
}
something1("Secound Param");

//Arrow Function 

let something2 = (thirdParam) => {
  console.log("Call Somethins Funcation " + thirdParam);
}
something2("Thirsd Param")