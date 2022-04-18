var button = document.getElementById('submit');
var post = document.getElementById('post');
var targetfield = document.getElementById('targetfield');
var view = document.querySelector('view');

button.addEventListener('click', function(){
    var post_text = post.value;
    targetfield.innerHTML = post_text;
})