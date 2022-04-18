var button = document.getElementById('submit');
var post = document.getElementById('post');
var targetfield = document.getElementById('targetfield');
var view = document.getElementById('view-cont');

// button.addEventListener('click', function(){
//     // var post_text = post.value;
//     // targetfield.innerHTML = post_text;
//     var poster = document.createElement('div')
//     poster.id = 'targetfield'
//     view.appendChild(poster)
// })

function newpost () {
    var poster = document.createElement('div')
    poster.id = 'targetfield'
    poster.innerText = post.value
    view.appendChild(poster)
}
var localpost = post.value
