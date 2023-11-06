var video;

// Page load -> Initialize the video element and turn off autoplay and turn off looping.
window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.getElementById("player1");

	video.autoplay = false;
	video.loop = false;

	
	// Play Button -> Play the video and update the volume information.  
	document.querySelector("#play").addEventListener("click", function() {
		console.log("Play Video");
		video.play();
	});
	
	// Pause Button -> Pause the video.
	document.querySelector("#pause").addEventListener("click", function() {
		console.log("Pause Video");
		video.pause();
	});
	
	// Slow Down -> Slow the current video speed by 10% each time the button is clicked and log the new speed to the console.  
	document.querySelector("#slower").addEventListener("click", function() {
		video.playbackRate -= 0.1;
		console.log("Slow down Video, new speed ", video.playbackRate);
	});
	
	// Speed Up -> Increase the current video speed each time the button is clicked and log the new speed to the console.  Change it by an amount proportional to the slow down. CHECK THIS!!  If you slow down three times and then speed up three times you should be within 5 digits of 100% again.
	document.querySelector("#faster").addEventListener("click", function() {
		video.playbackRate += 0.1;
		console.log("Speed up Video, new speed ", video.playbackRate);
	});
	
	// Skip Ahead -> Advance the current video by 10 seconds.  If the video length has been exceeded go back to the start of the video - no farther.   Log the current location of the video.
	document.querySelector("#skip").addEventListener("click", function() {
		video.currentTime += 10;
		if (video.currentTime > video.duration){
			video.currentTime = 0;
		}
		console.log("Skip Video, current time = ", video.currentTime);
	});
	
	
	
	// Mute -> Mute/unmute the video and update the text in the button.
	document.querySelector("#mute").addEventListener("click", function() {
		if (video.muted){
			video.muted = false;
			console.log("Video unmuted")
			document.getElementById("mute").textContent = "Mute";
			document.getElementById("volume").textContent = document.getElementById("slider").value + "%";
		} else {
			video.muted = true;
			console.log("Video muted");
			document.getElementById("mute").textContent = "Unmute";
			document.getElementById("volume").textContent = 0 * 100 + "%";

			
		}
	});
	
	
	
	// Volume Slider -> Change the volume based on the slider and update the volume information.
	document.querySelector("#slider").addEventListener("change", function() {

		video.volume = document.getElementById("slider").value / 100;
		document.getElementById("volume").textContent = video.volume * 100 + " %";
		console.log("Volume has changed!");
	});
	
	
	
	// Styled -> Utilize the existing oldSchool class on the video element
	document.getElementById("vintage").addEventListener("click", function() {
        video.classList.add("oldSchool");
    });
	
	
	// Original -> Remove the oldSchool class from the video.
	document.getElementById("orig").addEventListener("click", function() {
        video.classList.remove("oldSchool");
    });
	
	
	// use canvas resources on the video DOM and listeners 
});