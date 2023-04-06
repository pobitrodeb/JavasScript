$('#username').keyup(function (){
    var userName = $('#username').val(); 
    if(userName.length > 5 && userName.length < 21)
    {
       $('#nameError').text('');
    }
    else
    {
        $('#nameError').text('Must be 5 charecter and less 21 ');
    }
});

$('#email').keyup(function (){
    var userEmail = $('#email').val(); 
    var regex  = /^\w+@[a-zA-Z_]+?\.[a-zA-2]{5,10}$/;
    if (regex.test(userEmail))
    { 
        $('#emailError').text(''); 
    } 
    else 
    {
     $('#emailError').text('name must be 3 to 20 chearecter')
    }
 });





$('#registrationForm').submit(function()
{
    return false;
})
