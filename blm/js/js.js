window.onload = function(event) {
	window.open("https://kukuklok.com/audio/military.mp3");
};

// create youtube player
var player;
var id = document.getElementById("id").textContent;
id = "jZRD2EAViUc";
function onYouTubePlayerAPIReady() {
		player = new YT.Player('player', {
		height: '315',
		width: '560',
		videoId: id,
		events: {
			// 'onReady': onPlayerReady,
			'onStateChange': onPlayerStateChange
		}
	});
}

// https://stackoverflow.com/questions/7853904/how-to-detect-when-a-youtube-video-finishes-playing

// nvmd, this is garbage

let num = document.getElementById("num").textContent;
let n = 0;
let next = "nobody";
// let time = parseInt(document.getElementById("time").textContent);

let playlist = [
	"one"
]
for (let i = 0; i < playlist.length; i++) {
	if (num == playlist[i]) {
		n = i;
		console.log(n);
		break;
	}
}

if (n < playlist.length - 1) {
	next = playlist[n + 1] + ".html";
} else if (n == playlist.length - 1) {
	next = playlist[0] + ".html";
}

console.log("Next: " + next);
// console.log("In: " + time + " ms");

// setTimeout(function() {console.log("Moving on...")}, time - 1000);
// setTimeout(function() {window.open("../vidpages/" + next, "_self")}, time);

// when video ends
function onPlayerStateChange(event) {        
	if(event.data === 0) {            
		console.log('done');
		window.open("../vidpages/" + next, "_self")
	}
}