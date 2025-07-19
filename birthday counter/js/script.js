// Countdown Function
function updateCountdown() {
    const now = new Date();
    const currentYear = now.getFullYear();
    let birthday = new Date(currentYear, 6, 2); // July 2 (month is 0-indexed)
    
    if (now > birthday) {
        birthday.setFullYear(currentYear + 1);
    }
    
    const diff = birthday - now;
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    
    // Trigger celebration when countdown reaches zero
    if (diff < 1000) {
        triggerCelebration();
    }
}

// Celebration Effect
function triggerCelebration() {
    const confettiCanvas = document.getElementById('confetti');
    const confettiSettings = { target: confettiCanvas, max: 150 };
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
    
    // Play sound
    const audio = new Audio('sounds/birthday-horn.mp3');
    audio.play();
    
    // Show birthday message
    alert("🎉 Happy Birthday Jaydip! 🎂");
}

// Theme Toggle
document.querySelector('.theme-toggle').addEventListener('click', () => {
    document.body.setAttribute('data-theme', 
        document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
});

// Mobile Menu
document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Initialize
updateCountdown();
setInterval(updateCountdown, 1000);