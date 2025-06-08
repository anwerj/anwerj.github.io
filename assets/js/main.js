const boxes = [
    { title: "About Me", link: "/work", description: "Software engineer by profession,<br> engineer at heart,<br> deeply curious about cosmology and <br>fond of the occasional fantasy escape." },
    { title: "UPI Intent", link: "/intent", description: "A tool to create an Intent Link, QR Code and test these" },
    { title: "Unison", link: "/unison", description: "A dreamy approach to create flow diagrams" },
    { title: "Words Game", link: "/words", description: "Something to teach kids about Alphabets" },
    { title: "MyMongoView", link: "/mymongoview", description: "An Admin User Inteface for MongoDB" },
];

const colorPairs = [
    { bg: "#1A1A40", fg: "#F8F8FF" },
    { bg: "#283845", fg: "#FFD700" },
    { bg: "#22223B", fg: "#F694C1" },
    { bg: "#232946", fg: "#E9D8A6" },
    { bg: "#3A3A3A", fg: "#76FFB6" },
    { bg: "#0F0F0F", fg: "#FAF3DD" },
    { bg: "#1E2D2F", fg: "#C3F73A" },
    { bg: "#272343", fg: "#BAFF29" },
    { bg: "#202C39", fg: "#FFADAD" },
    { bg: "#1C1C1C", fg: "#E0FFFF" },
    { bg: "#121212", fg: "#B5EAEA" },
    { bg: "#141E30", fg: "#ECECEC" },
    { bg: "#0B132B", fg: "#F0F3BD" },
    { bg: "#152238", fg: "#FFEDC2" },
    { bg: "#191970", fg: "#FFE156" },
    { bg: "#0E0B16", fg: "#A239CA" },
    { bg: "#11151C", fg: "#F7FFF7" },
    { bg: "#2C3E50", fg: "#ECF0F1" },
    { bg: "#223843", fg: "#EFF1ED" },
    { bg: "#1D1E2C", fg: "#C5FFF8" },
    { bg: "#343A40", fg: "#F8F9FA" },
    { bg: "#3D3B8E", fg: "#FFFAFF" },
    { bg: "#1F1D36", fg: "#F2F7A1" },
    { bg: "#1B263B", fg: "#E0E1DD" },
    { bg: "#2D3142", fg: "#BFC0C0" },
    { bg: "#232B2B", fg: "#FFFEF2" },
    { bg: "#2F2D2E", fg: "#FFCAD4" },
    { bg: "#1C1F33", fg: "#E6FFFA" },
    { bg: "#292F36", fg: "#F7FFF7" },
    { bg: "#1B1B2F", fg: "#E4E4E4" },
    { bg: "#111D13", fg: "#FFCBF2" },
    { bg: "#0C0A3E", fg: "#E4FCCF" },
    { bg: "#262335", fg: "#F0F0C9" },
    { bg: "#212121", fg: "#FAD02C" },
    { bg: "#2C2A4A", fg: "#F7E8F6" },
    { bg: "#0F2027", fg: "#ECECEC" },
    { bg: "#1F2833", fg: "#66FCF1" },
    { bg: "#2E2E3A", fg: "#FFFFC2" },
    { bg: "#1C2321", fg: "#FFD6A5" },
    { bg: "#2D2A32", fg: "#E0BBE4" },
    { bg: "#242038", fg: "#FFF5E1" },
    { bg: "#181818", fg: "#E4FF1A" },
    { bg: "#202124", fg: "#F1F3F4" },
    { bg: "#151515", fg: "#FFD8BE" },
    { bg: "#222222", fg: "#FFF275" },
    { bg: "#191A19", fg: "#C8E6C9" },
    { bg: "#171C28", fg: "#FBF8CC" },
    { bg: "#1A1A1A", fg: "#E2FCEF" },
    { bg: "#232931", fg: "#EEEEEE" },
    { bg: "#2C2C2C", fg: "#FCE38A" },
];
colorPairs.push(
    { bg: "#F8F8FF", fg: "#1A1A40" },
    { bg: "#FAF3DD", fg: "#283845" },
    { bg: "#FFFAF0", fg: "#22223B" },
    { bg: "#FFF8E1", fg: "#232946" },
    { bg: "#FDFCDC", fg: "#3A3A3A" },
    { bg: "#FFFFFF", fg: "#0F0F0F" },
    { bg: "#ECF0F1", fg: "#1E2D2F" },
    { bg: "#F0F3BD", fg: "#272343" },
    { bg: "#F7FFF7", fg: "#202C39" },
    { bg: "#FFF5E1", fg: "#121212" },
    { bg: "#FFFFF0", fg: "#343A40" },
    { bg: "#FFF0F5", fg: "#3D3B8E" },
    { bg: "#E8F9FD", fg: "#191970" },
    { bg: "#F1F3F4", fg: "#0E0B16" },
    { bg: "#FFFBE6", fg: "#11151C" },
    { bg: "#FFF0D9", fg: "#2C3E50" },
    { bg: "#FAF9F6", fg: "#223843" },
    { bg: "#FFFBF5", fg: "#1D1E2C" },
    { bg: "#FFFFF8", fg: "#2F2D2E" },
    { bg: "#FFF9E3", fg: "#1C1C1C" },
    { bg: "#FFE5B4", fg: "#0C0A3E" },
    { bg: "#F3E9D2", fg: "#292F36" },
    { bg: "#F5F5F5", fg: "#1B1B2F" },
    { bg: "#E9ECEF", fg: "#111D13" },
    { bg: "#F8F1F1", fg: "#262335" },
    { bg: "#FFFAF0", fg: "#212121" },
    { bg: "#FDF7FA", fg: "#2C2A4A" },
    { bg: "#FFFBF4", fg: "#0F2027" },
    { bg: "#FFFDF7", fg: "#1F2833" },
    { bg: "#FEFAE0", fg: "#2E2E3A" },
    { bg: "#FFF9FB", fg: "#1C2321" },
    { bg: "#FFF0F0", fg: "#2D2A32" },
    { bg: "#FDF2E9", fg: "#242038" },
    { bg: "#FFF7EB", fg: "#181818" },
    { bg: "#FFF6E5", fg: "#202124" },
    { bg: "#FFFAFA", fg: "#151515" },
    { bg: "#F3F7F0", fg: "#222222" },
    { bg: "#F9FBE7", fg: "#191A19" },
    { bg: "#FBF8CC", fg: "#171C28" },
    { bg: "#E2FCEF", fg: "#1A1A1A" },
    { bg: "#EEEEEE", fg: "#232931" },
    { bg: "#FCE38A", fg: "#2C2C2C" },
    { bg: "#FFFDD0", fg: "#0B132B" },
    { bg: "#FFFDE7", fg: "#1C1F33" },
    { bg: "#F0FFFF", fg: "#2D3142" },
    { bg: "#FFF8F0", fg: "#1F1D36" },
    { bg: "#FAF0E6", fg: "#1B263B" },
    { bg: "#FDFDFD", fg: "#2D2A4A" }
);

const boxElements = [];

// 4) Create the boxes and append to container
const container = document.getElementById("container");
boxes.forEach((boxData) => {
    const div = document.createElement("div");
    div.className = "box";

    // Set initial random colors
    const { bg, fg } = getRandomColorPair();
    div.style.backgroundColor = bg;
    div.style.color = fg;

    // Fill in content
    div.innerHTML = `<a href="${boxData.link}" class="box-link">
        <h2>${boxData.title}</h2>
        <p>${boxData.description}</p>
    </a>
  `;

    container.appendChild(div);
    boxElements.push(div);
});

// 5) Utility to pick a random color pair
function getRandomColorPair() {
    return colorPairs[Math.floor(Math.random() * colorPairs.length)];
}

// 6) Every 2 seconds, reassign each .box a new random color pair
function updateBoxColors() {
    boxElements.forEach((boxEl) => {
        const { bg, fg } = getRandomColorPair();
        boxEl.style.backgroundColor = bg;
        boxEl.style.color = fg;
    });
}

setInterval(updateBoxColors, 2000);
