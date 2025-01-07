// Parallax effect for the video background 
// DO NOT TOUCH!!!!!!!!!!!!!!!
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY; // Get vertical scroll position
    const videoBackground = document.getElementById('video-background');

    // Move the video background upwards as the user scrolls
    videoBackground.style.transform = `translateY(-${scrollY * 0.001}px)`; // Adjust parallax effect
});

// Listen to the scroll event
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('visible'); // Show navbar after scrolling down
    } else {
        navbar.classList.remove('visible'); // Hide navbar when at the top
    }
});

// Event listener for the "Enable Sound" button
document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('background-music');
    const errorMessage = document.getElementById('error-message');
    const enableSoundButton = document.getElementById('enable-sound');

    if (!audio || !enableSoundButton) {
        console.error("Audio or button element not found in the DOM.");
        return;
    }

    enableSoundButton.addEventListener('click', () => {
        // Try to play the music
        audio.play().then(() => {
            console.log("Music started playing!");
            // Hide the popup
            document.getElementById('popup').style.display = 'none';
        }).catch((error) => {
            console.error("Error playing audio:", error);
            errorMessage.style.display = 'block';
            errorMessage.textContent = "Could not play music. Check the console for details.";
        });
    });
});
