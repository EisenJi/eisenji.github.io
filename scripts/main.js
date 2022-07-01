let myImage = document.querySelector('img')
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/a-cat.png') {
        myImage.setAttribute('src', 'images/dog.jpg');
    }else{
        myImage.setAttribute('src', 'images/a-cat.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('enter who you are.');
    if(!myName){
        setUserName();
    }else{
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Meow, play with me, meowww, ' + myName;

    }
}


if(!localStorage.getItem('name')) {
    setUserName();
}else{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Meow, play with me, meowww, ' + storedName;
}

myButton.onclick = function(){
    setUserName();
}