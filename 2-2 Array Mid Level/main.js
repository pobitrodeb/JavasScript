// Balnk Array 
var blankArray = []; 
blankArray.push('name'); 
// console.log(blankArray);

//String To Array 
var divission = "Dhaka"; 
var convertArray = divission.split();   //split method is convert string 
// console.log(convertArray);


//Arry to String 
var districts = "Dhaka"; 
var convertArray = districts.split("");   //split method is convert string 
// console.log(convertArray);       

var countrys = ["Bangladesh", "Indida", "USA", "Italy"]; 
// var result = countrys.toString(); 
var result = countrys.join(" "); // Use Real time project uses 
// console.log(result);


//Multi Array Concret 
var persons = ['Bimol', 'Rajib', 'Swapon', "Ajob"]; 
var persons2 = ['anup', 'rahuls']; 
 
var concat = persons.concat(persons2); 
// console.log(concat);


//Array Shorting 
concat.sort(); // ascding sort 
console.log(concat);  
concat.reverse()
console.log(concat);


