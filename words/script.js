const gameContainer = document.getElementById("game-container");
const fullscreenBtn = document.getElementById("fullscreen-btn");
let letters = [];
let icons = [];
let currentWord = "";

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

// Dictionary of words and corresponding Font Awesome icon classes
const wordIcons = {
    CAT: "fa-cat",
    DOG: "fa-dog",
    KITE: "fa-paper-plane",
    CAR: "fa-car",
    TREE: "fa-tree",
    MOON: "fa-moon",
    STAR: "fa-star",
    FISH: "fa-fish",
    BIRD: "fa-dove",
    SUN: "fa-sun",
    HOUSE: "fa-home",
    HEART: "fa-heart",
    BOOK: "fa-book",
    BALL: "fa-football-ball",
    COW: "fa-cow",
    CHICKEN: "fa-kiwi-bird",
    ELEPHANT: "fa-elephant",
    PLANE: "fa-plane",
    TRAIN: "fa-train",
    ICECREAM: "fa-ice-cream",
    HAT: "fa-hat-cowboy",
    FROG: "fa-frog",
    GIRAFFE: "fa-giraffe",
    PENGUIN: "fa-penguin",
    RABBIT: "fa-rabbit",
    SANDWICH: "fa-hamburger",
    TOY: "fa-gamepad",
    COOKIE: "fa-cookie",
    CANDLE: "fa-birthday-cake",
    MUSIC: "fa-music",
    PUZZLE: "fa-puzzle-piece",
    ZEBRA: "fa-zebra" // Added zebra here
};


// Function to add a letter to the screen
function addLetter(char) {
    const letter = document.createElement("div");
    letter.className = "letter";
    letter.textContent = char;

    // Random initial position and movement direction
    letter.style.left = Math.random() * 80 + "vw";
    letter.style.top = Math.random() * 80 + "vh";
    letter.dx = (Math.random() < 0.5 ? -1 : 1) * 0.03; // Slower speed
    letter.dy = (Math.random() < 0.5 ? -1 : 1) * 0.03;

    gameContainer.appendChild(letter);
    letters.push(letter);

    // Limit to 15 letters
    if (letters.length > 15) {
        resetLetters();
    }
}

// Function to update letter and icon positions and keep within bounds
function animateElements() {
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

    icons.forEach(icon => {
        let left = parseFloat(icon.style.left);
        let top = parseFloat(icon.style.top);

        // Update icon position
        left += icon.dx;
        top += icon.dy;

        // Bounce off edges by reversing direction if at boundary
        if (left <= 0 || left >= 95) icon.dx *= -1;
        if (top <= 0 || top >= 95) icon.dy *= -1;

        icon.style.left = left + "vw";
        icon.style.top = top + "vh";
    });

    requestAnimationFrame(animateElements);
}

animateElements(); // Start animation loop

// Reset letters when they exceed the limit
function resetLetters() {
    letters.forEach(letter => letter.remove());
    letters = [];
    currentWord = ""; // Clear the current word
}

// Listen for keyboard events
document.addEventListener("keydown", (event) => {
    const char = event.key.toUpperCase();
    if (/^[A-Z]$/.test(char)) {
        addLetter(char);
        currentWord += char;
        if (currentWord.length > 15) {
            currentWord = currentWord.slice(-15);
        }
        checkForWordMatch();
    }
});

// Check if any word in the dictionary matches a substring within the current word
function checkForWordMatch() {
    Object.keys(wordIcons).forEach(word => {
        if (currentWord.includes(word)) {
            showIcon(wordIcons[word]);
            resetLetters(); // Clear all entered letters on match
            currentWord = ""; // Reset current word
        }
    });
}

// Function to show the icon for a matched word
function showIcon(iconClass) {
    const icon = document.createElement("i");
    icon.className = `fas ${iconClass} icon`;
    icon.style.left = Math.random() * 80 + "vw"; // Random initial position
    icon.style.top = Math.random() * 80 + "vh";
    icon.dx = (Math.random() < 0.5 ? -1 : 1) * 0.03; // Slower speed
    icon.dy = (Math.random() < 0.5 ? -1 : 1) * 0.03;

    gameContainer.appendChild(icon);
    icons.push(icon);
}

// Start animating letters and icons
animateElements();
