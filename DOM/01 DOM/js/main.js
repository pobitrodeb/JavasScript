

var blogTitle = document.getElementsByTagName('h3');
console.log(blogTitle);

for ( var totlaTag of blogTitle)
{
    console.log(totlaTag.innerText);
}

var blogDetail = document.getElementsByName('p'); 
for(var blogparagraph of blogDetail)
{
    console.log(blogparagraph.innerText);
}
