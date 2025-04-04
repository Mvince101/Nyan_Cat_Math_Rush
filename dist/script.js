// Select the background music element and the button
const bgMusic = document.getElementById("bgMusic");
const toggleMusicBtn = document.getElementById("toggle-music");

// Check if music was previously muted (stored in localStorage)
if (localStorage.getItem("musicMuted") === "true") {
    bgMusic.muted = true;  // Mute the music if it's previously set to muted
    toggleMusicBtn.textContent = "🔇";  // Change the button to indicate "muted"
} else {
    bgMusic.muted = false;  // Unmute the music if it's not muted
    toggleMusicBtn.textContent = "🔊";  // Change the button to indicate "unmuted"
}

// Mute/Unmute toggle function when the button is clicked
toggleMusicBtn.addEventListener("click", function () {
    bgMusic.muted = !bgMusic.muted;  // Toggle mute state
    localStorage.setItem("musicMuted", bgMusic.muted);  // Store mute state in localStorage
    
    // Change the button text based on the mute state
    toggleMusicBtn.textContent = bgMusic.muted ? "🔇" : "🔊";
});
