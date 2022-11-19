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
})




$('#registrationForm').submit(function()
{
    return false;
})
