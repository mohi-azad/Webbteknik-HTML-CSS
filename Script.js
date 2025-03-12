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

/*

// Funktiona för att skapa hover-effekt på navigationsrutan.
document.addEventListener("DOMContentLoaded", function () {
	// Anropa och hämta navbaren
    const navbar = document.querySelector(".navbar");

    // Funktion: Ändra färg på navbar när musen pekar på den
    navbar.addEventListener("mouseover", function () {
        this.style.backgroundColor = "#103e77"; // Ändra bakgrundsfärg
        this.style.transition = "background-color 0.3s ease-in-out"; // Mjuk övergång
    });

    navbar.addEventListener("mouseout", function () {
        this.style.backgroundColor = "#f9f6f6"; // Återställ färgen när musen lämnar
    });

    // Funktion: Hover-effekt på navigationslänkar
    document.querySelectorAll(".nav-items li a").forEach(link => {
        link.addEventListener("mouseover", function () {
            this.style.color = "white";
            this.style.backgroundColor = "#103e77";
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

    // Funktion: Interaktiv sökruta
    const searchLink = document.getElementById("search-link");
    const searchBox = document.createElement("input");
    searchBox.type = "text";
    searchBox.placeholder = "Sök här...";
    searchBox.style.display = "none"; // Dolt från början
    searchBox.style.padding = "5px";
    searchBox.style.border = "1px solid white";
    searchBox.style.borderRadius = "5px";
    searchBox.style.marginLeft = "10px";

    searchLink.parentNode.appendChild(searchBox); // Lägg till sökrutan efter länken

    searchLink.addEventListener("click", function (event) {
        event.preventDefault(); // Förhindra att länken navigerar
        searchBox.style.display = "inline-block"; // Visa sökrutan
        searchBox.focus();
    });

    searchBox.addEventListener("blur", function () {
        searchBox.style.display = "none"; // Dölj sökrutan igen när den förlorar fokus
    });
});

*/

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

    // Funktion: Interaktiv sökruta
    const searchLink = document.getElementById("search-link");
    const searchBox = document.createElement("input");
    searchBox.type = "text";
    searchBox.placeholder = "Sök här...";
    searchBox.style.display = "none"; // Dolt från början
    searchBox.style.padding = "5px";
    searchBox.style.border = "1px solid white";
    searchBox.style.borderRadius = "5px";
    searchBox.style.marginLeft = "10px";

    searchLink.parentNode.appendChild(searchBox); // Lägg till sökrutan efter länken

    searchLink.addEventListener("click", function (event) {
        event.preventDefault(); // Förhindra att länken navigerar
        searchBox.style.display = "inline-block"; // Visa sökrutan
        searchBox.focus();
    });

    searchBox.addEventListener("blur", function () {
        searchBox.style.display = "none"; // Dölj sökrutan igen när den förlorar fokus
    });
});





