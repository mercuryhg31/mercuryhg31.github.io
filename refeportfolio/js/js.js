// Code for a modal
var modal = document.getElementById('sample-modal');
var btn = document.getElementById('sample-btn');
var close = document.getElementsByClassName('close');

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
    var propaganda = document.createElement("BUTTON");
    propaganda.appendChild(document.createTextNode("Propaganda"));
    propaganda.className = "nav-btn";
    
    var statistics = document.createElement("BUTTON");
    propaganda.appendChild(document.createTextNode("Statistics"));
    statistics.className = "nav-btn";
    
    // METHOD 2
    var propaganda = '<button class="nav-button">Propoganda</button>';
    var statistics = '<button class="nav-button">Statistics</button>';
    
    document.getElementsByClassName('nav-bar').innerHTML = propaganda + statistics; // help, nothing works ;-;
}

function chooseBackground() {
    var images = [
        "", // insert file paths here
        ];
    var rand = Math.floor(Math.random() * images.length);
    document.body.style.backgroundImage = "url('" + images[rand] + "')";
}