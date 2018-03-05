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
    var pics = document.getElementById('pics');
    pics.innerHTML = ''
    console.log("data",data)
    var photo = document.createElement('img');
    photo.setAttribute('src', data.avatar_url);
    var ancourt = document.createElement('a');
    ancourt.setAttribute('href', data.html_url);
    ancourt.setAttribute('target', '_blank');
    var name = document.createElement("p");
    name.innerHTML = data.login;
    console.log(name);
    console.log(ancourt);
    pics.appendChild(name);
    pics.appendChild(ancourt);
    pics.appendChild(photo);

    photo.addEventListener("click", getRepos);
};

function getRepos(data) {
    var ancourt = document.createElement('a');
    ancourt.setAttribute('href', data.html_url);
    ancourt.setAttribute('target', '_blank');
    console.log("si entra funcion")
}

//iterateUsers(userArray)

var button = document.getElementById('button-search');
button.addEventListener('click', searchUser)

function searchUser(){
    var user = document.getElementById('input-user');
    console.log(user)
    getData(user.value)
}
