var studentName = ['shafikul', 'rasel', 'shakhawat', 'ariful', 'tilok', 'sajib', 'bipul'];  //delcear of array
console.log(studentName);  

var findIndex = studentName.indexOf('sajib'); // find with arry value 
console.log(findIndex);

var findIndexValue = studentName[2];  // find with index number 
console.log(findIndexValue); 

console.log('Now All Studentent are : ' + studentName); 
studentName[5] = 'Guljar'; // replace value by indx numberr 
console.log('Afer Replace All student : ' + studentName); 

console.log('All Student : ' + studentName); 
studentName.push('Sajib'); // add array value 
console.log(studentName); 

console.log('All Student : ' + studentName); 
studentName.pop(studentName);  // delete array last value 
console.log(studentName); 

console.log('All Student : ' + studentName); 
studentName.unshift('Dalim kUmar');  // add begining value 
console.log(studentName); 