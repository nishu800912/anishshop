// Placeholder for any future interactive elements.
console.log("Website loaded successfully");

document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("learnMoreBtn");
    const text = document.getElementById("learnMoreText");

    button.addEventListener("click", function () {
        if (text.style.display === "none") {
            text.style.display = "block";
            button.innerText = "Show Less";
        } else {
            text.style.display = "none";
            button.innerText = "Learn More About Us";
        }
    });
});
