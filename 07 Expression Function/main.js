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

let something2 = (thirdParam, fourParam) => {
  console.log("Call Somethins Funcation " + thirdParam + fourParam);
}
something2("Thirsd Param", "Four Params")


//Arrow Function [ if your one params]

let something3 = fiveParam => {
  console.log("Call is" + fiveParam);
}

something3("Five Pram");