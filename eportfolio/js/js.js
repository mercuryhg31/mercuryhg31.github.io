let intro = document.getElementById('intro');
window.onload = function(event) {
    for (let i = 0; i < introArr.length; i++) {
        this.setTimeout(() => {intro.innerHTML += introArr[i]}, 1000);
    }
};
let introArr = ["H", "e", "l", "l", "o", ",", " ", "m", "y", " ", "n", "a", "m", "e", " ", "i", "s", " ", "H", "a", "r", "s", "h", "i", "t", "a", " ", "G", "a", "r", "g", ".", "<br/>", "I", " ", "a", "m", " ", "a", " ", "g", "r", "a", "d", "u", "a", "t", "i", "n", "g", " ", "s", "e", "n", "i", "o", "r", " ", "a", "t", " ", "t", "h", "e", " ", "A", "c", "a", "d", "e", "m", "y", " ", "f", "o", "r", " ", "I", "n", "f", "o", "r", "m", "a", "t", "i", "o", "n", " ", "T", "e", "c", "h", "n", "o", "l", "o", "g", "y", ".", "<br/>", "T", "h", "i", "s", " ", "i", "s", " ", "w", "h", "a", "t", " ", "I", "'", "v", "e", " ", "d", "o", "n", "e", " ", "t", "h", "e", " ", "p", "a", "s", "t", " ", "f", "o", "u", "r", " ", "y", "e", "a", "r", "s", "."]; let introNum = 0;




// Code for a modal
let modal = document.getElementById('sample-modal');
let btn = document.getElementById('sample-btn');
let close = document.getElementsByClassName('close');

btn.onclick = function() {
    modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
    // close.onclick = function() {
    //     modal.style.display = "none";
    // }
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Trying to make this js so that we don't have to copy and past all the time
function navBar() {
    // METHOD 1
    let propaganda = document.createElement("BUTTON");
    propaganda.appendChild(document.createTextNode("Propaganda"));
    propaganda.className = "nav-btn";
    
    let statistics = document.createElement("BUTTON");
    propaganda.appendChild(document.createTextNode("Statistics"));
    statistics.className = "nav-btn";
    
    // METHOD 2
    let propaganda = '<button class="nav-button">Propoganda</button>';
    let statistics = '<button class="nav-button">Statistics</button>';
    
    document.getElementsByClassName('nav-bar').innerHTML = propaganda + statistics; // help, nothing works ;-;
}

function chooseBackground() {
    let images = [
        "", // insert file paths here
        ];
    let rand = Math.floor(Math.random() * images.length);
    document.body.style.backgroundImage = "url('" + images[rand] + "')";
}