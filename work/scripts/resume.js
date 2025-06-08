document.addEventListener("DOMContentLoaded", async () => {
    let response = await fetch("content/2025.md");
    let md = await response.text();
    let html = marked.parse(md);
    document.getElementById("content").innerHTML = html;

    response = await fetch("content/header.md");
    md = await response.text();
    html = marked.parse(md);
    document.getElementById("header").innerHTML = html;

    const themeSelector = document.getElementById("theme-selector");
    themeSelector.addEventListener("change", (e) => {
        const theme = e.target.value;
        const body = document.body;

        // Remove previous theme classes
        body.className = "";
        body.classList.add(`theme-${theme}`);
    });
});
