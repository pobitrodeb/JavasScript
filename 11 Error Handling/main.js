
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

// Logic Emplement  
let a = 34; 

try {
        if(a > 45 ) throw 'This is big of 45'; 
        else if( a < 45) throw 'This is small of 45'
} catch (error) {
    console.log(error);
};

