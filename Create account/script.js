var Storage = [ 
    {
        username: 'Batbayasagalan',
        surname: 'Batbaatar',
        user: 'noty',
        password: '1234',
        email: 'bayasaa0424@yahoo.com',
        age: '20',
        id:'01242453'
    },
]
function registerUser(){
    var newname = document.getElementById('newname').value
    var newsurname = document.getElementById('newsurname').value
    var newuser = document.getElementById('newuser').value
    var newpassword = document.getElementById('newpassword').value
    var newemail = document.getElementById('newemail').value
    var newage = document.getElementById('newage').value

    var newUser = {
        username: newname,
        surname: newsurname,
        user: newuser,
        password: newpassword,
        email: newemail,
        age: newage,
        id: Date.now()
    }

    for(var i = 0; i < Storage.length; i++) {
        if(registerUser == Storage[i].user) {
            alert('already')
            break
        }   else if (newpassword.length == 0) {
            alert('password plz')
            break
        }   else if (newpassword.length < 6) {
            alert('password too short')
            break
        }   else if (!newpassword.match(/[0-9]/g)) {
            alert('password atleast 1 number')
            break
        }   else if (!newpassword.match(/[A-Z]/g)) {
            alert('password atleast 1 uppercase')
            break
        }   else if (!newpassword.match(/[a-z]/g)) {
            alert('password atleast 1 lowercase')
            break
        }   else if (newname.length < 3) {
            alert('name atleast greater than 3')
        }   else if (!newname.match(/[^0-9]/g)) {
            alert('name cant have a number')
            break
        }   else if (newsurname.length == 0) {
            alert('surname pls')
            break
        }   else if (!newsurname.match(/[^0-9]/g)) {
            alert('surname cant have number')
            break
        }   else if (newuser.length == 0) {
            alert('enter user name')
            break
        }   else if (newemail.length == 0) {
            alert('enter email')
            break
        }   else if (!newemail.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
            alert('wrong email')
            break
        }   else if (newage.length == 0){
            alert('enter age')
            break
        }   else if (newage.match(/[^0-9]/g)) {
            alert('age is number')
            break
        }   else if (newage.length < 1) {
            alert('too young')
            break
        }   else {
            alert('success')
            //window.location.href='../Login/index.html'
            Storage.push(newUser)
            console.log(Storage)
            localStorage.users = JSON.stringify(Storage)
            break
        }
    }
}

let whoLoggedIn;

function login(){
    var user = document.getElementById('user').value
    var password = document.getElementById('password').value
    //var currentUser = document.querySelector('.curuser');

    for(var i = 0; i < JSON.parse(localStorage.users).length; i++) {
        if(user == JSON.parse(localStorage.users)[i].user && password == JSON.parse(localStorage.users)[i].password) {
            console.log(user + ' is logged in')
            window.location.href='./post.html'
            whoLoggedIn = JSON.parse(localStorage.users)[i]
            
            localStorage.whoLoggedIn = JSON.stringify(whoLoggedIn)
            //currentUser.innerText = JSON.parse(localStorage.whoLoggedIn).user
            console.log(whoLoggedIn)
            break
        }   else {
            console.log('no')
        }
    }
}

// function post(path, params, method = 'post') {
//     const form = document.createElement('form');
//     form.method = method;
//     form.action = path;

//     for (const key in params) {
//         if (params.hasOwnProperty(key)){
//             const field = document.createElement('input');
//             field.type = 'hidden';
//             field.name = key;
//             field.value = params[key];

//             form.appendChild(field);
//         }
//     }
//     document.body.appendChild(form);
//     form.submit();
// }
