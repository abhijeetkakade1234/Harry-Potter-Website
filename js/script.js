// Parallax effect for the video background 
// DO NOT TOUCH!!!!!!!!!!!!!!!
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY; // Get vertical scroll position
    const videoBackground = document.getElementById('video-background');

    // Move the video background upwards as the user scrolls
    videoBackground.style.transform = `translateY(-${scrollY * 0.001}px)`; // Adjust parallax effect
});

