document.addEventListener("DOMContentLoaded", function () {
    // Fade-in animation for sections
    let sections = document.querySelectorAll(".container");
    sections.forEach((section, index) => {
        setTimeout(() => {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }, 300 * index);
    });

    // Button hover animation
    let buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener("mouseover", function () {
            button.style.transform = "scale(1.1)";
        });
        button.addEventListener("mouseout", function () {
            button.style.transform = "scale(1)";
        });
    });

    // Slide-in navigation bar
    let nav = document.querySelector("nav");
    nav.style.opacity = "0";
    nav.style.transform = "translateY(-50px)";
    setTimeout(() => {
        nav.style.transition = "all 0.6s ease-out";
        nav.style.opacity = "1";
        nav.style.transform = "translateY(0)";
    }, 500);

    // Input focus effect
    let inputs = document.querySelectorAll("input, select");
    inputs.forEach((input) => {
        input.addEventListener("focus", function () {
            input.style.boxShadow = "0px 0px 10px rgba(138, 43, 226, 0.8)"; // Violet shadow on focus
        });
        input.addEventListener("blur", function () {
            input.style.boxShadow = "none";
        });
    });
});
