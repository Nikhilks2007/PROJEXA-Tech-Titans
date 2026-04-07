let slider = document.getElementById("bookSlider");

setInterval(() => {
    slider.scrollBy({
        left: 250,
        behavior: "smooth"
    });
}, 3000);

// Navbar
window.addEventListener("scroll", () => {
    let navbar = document.getElementById("navbar");

    if (window.scrollY > 50) {
        navbar.style.background = "rgba(0,0,0,0.8)";
    } else {
        navbar.style.background = "linear-gradient(135deg, rgba(0,123,255,0.2), rgba(0,0,0,0.6))";
    }
});