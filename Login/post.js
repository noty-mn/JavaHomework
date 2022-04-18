var button = document.getElementById('submit');
var post = document.getElementById('post');
var targetfield = document.getElementById('targetfield');
var view = document.getElementById('view-cont');
var postStorage = []
var user = document.querySelector('.user');

if(localStorage.posts != undefined  || localStorage.posts != '[]') {
    postStorage = JSON.parse(localStorage.posts)
} else {
    postStorage = []
}


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
    poster.insertAdjacentHTML('afterbegin', `
        <div class="henbe"> ${JSON.parse(localStorage.whoLoggedIn).user} <i id="trash" class="fa-solid fa-trash"></i></div>
    `)
    // JSON.parse(localStorage.whoLoggedIn).id
    let shinePost = {
        post: post.value, 
        userId: JSON.parse(localStorage.whoLoggedIn).id,
        id: Date.now()
    }
    postStorage.push(shinePost)
    console.log(postStorage)
    localStorage.posts = JSON.stringify(postStorage)
}
function deletePost (i) {
    // if(i.target.id === 'trash') {
    //     let posts = JSON.parse(localStorage.posts)
    //     let postsupdate = [];

    //     posts.forEach (
    //         function(el){
    //             if(el.id == i.target.parentElement)
    //             console.log(i.target.parentElement)
    //         }
    //     )
    // }
    if(i.target.id === 'trash') {
        console.log(i.target.parentElement.parentElement)
        i.target.parentElement.parentElement.remove()
    }
}
document.addEventListener('click', deletePost)

const newPostParent = document.querySelector('#view-cont')
let posts = JSON.parse(localStorage.posts)

let whoLoggedIn = JSON.parse(localStorage.whoLoggedIn)

function postSync() {
    newPostParent.innerHTML = '';
    console.log(newPostParent)
    if(localStorage.posts != undefined || localStorage.posts == '[]') {
        posts.forEach(function(el) {
            let newPost = document.createElement('div');
            newPost.id = 'new-post';
        
            let whoPosted = document.createElement('div');
            whoPosted.id = 'whoPosted';
            JSON.parse(localStorage.users).forEach((a)=> {
                if(a.id == el.userId) {
                    whoPosted.innerText = a.user;
                }
            })

    
            let newPostText = document.createElement('div');
            newPostText.id = 'new-post-text';
            newPostText.innerText = el.post;
    
            let circleEllips = document.createElement('i');
            circleEllips.className = 'fa-solid fa-trash';
            circleEllips.id = 'trash';
            
            if(el.userId == whoLoggedIn.id) {
                whoPosted.appendChild(circleEllips);
            }

            let postId = document.createElement('input');
            postId.className = "postId";
            // postId.value = JSON.parse(el.id);
            postId.value = el.id;

            newPost.appendChild(postId);
            newPost.appendChild(whoPosted);
            newPost.appendChild(newPostText);
            newPostParent.appendChild(newPost);
        });
    }
}
postSync();