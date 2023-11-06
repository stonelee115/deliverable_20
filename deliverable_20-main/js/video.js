var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

// Define the video variable and assign the video element to it after the page loads
window.addEventListener("load", function() {
    console.log("Good job opening the window");
    video = document.querySelector("#player1");
    video.autoplay = false; 
    video.loop = false; 
    updateVolumeText(); 
});


function updateVolumeText() {
    document.getElementById('volume').textContent = (video.volume * 100).toFixed(0) + '%';
}


document.querySelector("#play").addEventListener("click", function() {
    video.play();
    console.log("Play Video");
    updateVolumeText();
});


document.querySelector("#pause").addEventListener("click", function() {
    video.pause();
    console.log("Pause Video");
});


document.querySelector("#slower").addEventListener("click", function() {
    video.playbackRate *= 0.90; 
    console.log("New speed is " + video.playbackRate.toFixed(2));
});


document.querySelector("#faster").addEventListener("click", function() {
    video.playbackRate /= 0.90; 
    console.log("New speed is " + video.playbackRate.toFixed(2));
});


document.querySelector("#skip").addEventListener("click", function() {
    if (video.currentTime + 10 >= video.duration) {
        video.currentTime = 0;
        console.log("Going back to start");
    } else {
        video.currentTime += 10;
    }
    console.log("Current location " + video.currentTime.toFixed(2));
});


document.querySelector("#mute").addEventListener("click", function() {
    video.muted = !video.muted;
    document.querySelector("#mute").textContent = video.muted ? "Unmute" : "Mute";
    console.log(video.muted ? "Video muted" : "Video unmuted");
});


document.querySelector("#slider").addEventListener("change", function() {
    video.volume = this.value / 100;
    updateVolumeText();
});


document.querySelector("#vintage").addEventListener("click", function() {
    video.classList.add("oldSchool");
});


document.querySelector("#orig").addEventListener("click", function() {
    video.classList.remove("oldSchool");
});
