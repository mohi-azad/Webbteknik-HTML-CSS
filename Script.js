const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-items");

console.log("Hamburger-element:", hamburger);
console.log("Nav-items-element:", navMenu);

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-items a").forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    });
});


const popup = document.getElementById("popup");
function openPopup() {
    console.log("openPopup() anropades");
    popup.classList.add("open-popup");
}

function closePopup() {
    console.log("closePopup() anropades");
    popup.classList.remove("open-popup");
}
