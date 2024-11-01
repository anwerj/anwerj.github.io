const gameContainer = document.getElementById("game-container");
const fullscreenBtn = document.getElementById("fullscreen-btn");
let letters = [];

// Fullscreen functionality
fullscreenBtn.addEventListener("click", () => {
    if (!document.fullscreenElement) {
        gameContainer.requestFullscreen().catch(err => {
            alert(`Error attempting to enable full-screen mode: ${err.message}`);
        });
    } else {
        document.exitFullscreen();
    }
});

// Function to add a letter to the screen
function addLetter(char) {
    const letter = document.createElement("div");
    letter.className = "letter";
    letter.textContent = char;

    // Random initial position and movement direction
    letter.style.left = Math.random() * 80 + "vw";
    letter.style.top = Math.random() * 80 + "vh";
    letter.dx = (Math.random() < 0.5 ? -1 : 1) * 0.05;
    letter.dy = (Math.random() < 0.5 ? -1 : 1) * 0.05;

    gameContainer.appendChild(letter);
    letters.push(letter);

    if (letters.length > 15) {
        resetLetters();
    }

    setInterval(() => changeFontColor(letter), 1000);
}

// Function to update letter positions and keep within bounds
function animateLetters() {
    letters.forEach(letter => {
        let left = parseFloat(letter.style.left);
        let top = parseFloat(letter.style.top);

        // Update position
        left += letter.dx;
        top += letter.dy;

        // Bounce off edges by reversing direction if at boundary
        if (left <= 0 || left >= 95) letter.dx *= -1;
        if (top <= 0 || top >= 95) letter.dy *= -1;

        letter.style.left = left + "vw";
        letter.style.top = top + "vh";
    });

    requestAnimationFrame(animateLetters);
}

animateLetters();

// Reset letters when they exceed the limit
function resetLetters() {
    letters.forEach(letter => letter.remove());
    letters = [];
}

// Listen for keyboard events
document.addEventListener("keydown", (event) => {
    const char = event.key.toUpperCase();
    if (/^[A-Z]$/.test(char)) {
        addLetter(char);
        checkForWordMatch();
    }
});

// Function to handle font color change
function changeFontColor(letter) {
    const colors = ["red", "green", "blue", "purple", "orange"];
    letter.style.color = colors[Math.floor(Math.random() * colors.length)];
}
