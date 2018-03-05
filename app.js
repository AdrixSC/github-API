
// const userArray = ['AdrixSC', 'superliza', 'CruzMayra', 'biokah', 'Hanie24']
// function iterateUsers(userArray){
//     for(var i = 0; i < userArray.length; i++){
//         getData(userArray[i])
//     }
// }

function getData (url){
    var request = new XMLHttpRequest();
    request.open('GET', 'https://api.github.com/users/' + url)
    request.onload = getUser;
    request.onerror = handleError;
    request.send()
}

function handleError(){
    console.log('se ha presentado un error');
}

function getUser(){
    const data = JSON.parse(this.responseText)
    console.log(data)
    var photo = document.createElement('img');
    photo.setAttribute('src', data.avatar_url)
    var pics = document.getElementById('pics');
    pics.appendChild(photo)
}

//iterateUsers(userArray)

var button = document.getElementById('button-search');
button.addEventListener('click', searchUser)

function searchUser(){
    var user = document.getElementById('input-user').value;
    console.log(user)
    getData(user)
}
