
//error check by try catch 

console.log("before error");
try {
  
} catch (error) {
   console.log(error.message); // customize message 
   console.log(error.name);  // error type show
}finally{
    console.log("I am inside finallay"); 
}
console.log('Result After Try Catch');