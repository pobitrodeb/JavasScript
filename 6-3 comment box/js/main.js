document.getElementById('commentSubmit').addEventListener('click', function(){
  var comment = document.getElementById('commnetBox'); 
  //var userComment =  console.log(comment.value);

  var newComment = document.createElement('p');
  newComment.innerText = comment.value;

    var commentContainer = document.getElementById('commnet-container'); 
    commentContainer.appendChild(newComment);
})