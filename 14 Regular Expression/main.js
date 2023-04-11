let regularExperssion; 

regularExperssion = / it is regular expression variable / ;
regularExperssion = /it is string/i
console.log(regularExperssion);
console.log(regularExperssion.resource);


let str;
str = "It is string"; 

//exec ()
let result = regularExperssion.exec(str)
console.log(result);

//test()
let result2 = regularExperssion.test(str)
console.log(result);