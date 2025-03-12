// 
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

// Task 3.1
// Funktiona för att skapa hover-effekt på navigationsrutan.
document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");

    // Variabel för att lagra den slumpmässiga färgen för navbaren
    let navbarColor = "";
    const originalColor = "#f9f6f6";  // Ursprunglig bakgrundsfärg

    // Funktion för att skapa en slumpmässig färg i RGB-format
    function getRandomColor() {
        let r = Math.floor(Math.random() * 256); // Röd komponent (0-255)
        let g = Math.floor(Math.random() * 256); // Grön komponent (0-255)
        let b = Math.floor(Math.random() * 256); // Blå komponent (0-255)
        return `rgb(${r}, ${g}, ${b})`; // Returnera färgen i RGB-format
    }

    // Funktion: Ändra färg på navbar när musen pekar på den
    navbar.addEventListener("mouseover", function () {
        if (!navbarColor) { // Om navbarColor inte har satts tidigare
            navbarColor = getRandomColor(); // Sätt en slumpmässig färg
        }
        this.style.backgroundColor = navbarColor; // Använd den slumpmässiga färgen
        this.style.transition = "background-color 0.3s ease-in-out"; // Mjuk övergång
    });

    navbar.addEventListener("mouseout", function () {
        this.style.backgroundColor = originalColor; // Återställ till originalfärgen när musen lämnar
    });

    // Funktion: Hover-effekt på navigationslänkar
    document.querySelectorAll(".nav-items li a").forEach(link => {
        link.addEventListener("mouseover", function () {
            this.style.color = getRandomColor(); // Slumpmässig textfärg
            this.style.backgroundColor = getRandomColor(); // Slumpmässig bakgrundsfärg
            this.style.padding = "5px 10px";
            this.style.borderRadius = "5px";
        });

        link.addEventListener("mouseout", function () {
            this.style.color = "";
            this.style.backgroundColor = "";
            this.style.padding = "";
            this.style.borderRadius = "";
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const searchLink = document.getElementById("search-link"); // Hämta söklänken
    const searchBox = document.getElementById("search-box"); // Hämta sökrutan

    // När man klickar på "SÖK", visa sökrutan
    searchLink.addEventListener("click", function (event) {
        event.preventDefault(); // Förhindra att länken navigerar
        searchBox.style.display = "inline-block"; // Visa sökrutan
        searchBox.focus(); // Sätt fokus i fältet
    });

    // När man klickar bort från sökrutan, dölj den
    searchBox.addEventListener("blur", function () {
        searchBox.style.display = "none"; // Dölj sökrutan igen
    });

    // Förbättring: Lägg till stiländringar vid fokus
    searchBox.addEventListener("focus", function () {
        searchBox.style.backgroundColor = "#e8f0fe"; // Ljusblå bakgrund vid fokus
        searchBox.style.border = "2px solid #103e77"; // Markerad kantlinje
    });

    searchBox.addEventListener("blur", function () {
        searchBox.style.backgroundColor = ""; // Återställ bakgrund
        searchBox.style.border = ""; // Återställ kantlinje
    });
});
