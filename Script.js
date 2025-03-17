// Funktion för att skapa "Hamburgermenyn"
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-items");

console.log("Hamburger-element:", hamburger);
console.log("Nav-items-element:", navMenu);
// Aktivera menyn
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});
// Stänga menyn
document.querySelectorAll(".nav-items a").forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    });
});

// Funktion för att öppna sms-boxen
const popup = document.getElementById("popup");
function openPopup() {
    console.log("openPopup() anropades");
    popup.classList.add("open-popup");
}
// Funktion för att stänga sms-boxen
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
    const originalColor = "#f9f6f6";  
    // Funktion för att skapa en slumpmässig färg i RGB-format
    function getRandomColor() {
        let r = Math.floor(Math.random() * 256); 
        let g = Math.floor(Math.random() * 256); 
        let b = Math.floor(Math.random() * 256); 
        return `rgb(${r}, ${g}, ${b})`;
    }
    // ändra färg på navbar när musen pekar på den
    navbar.addEventListener("mouseover", function () {
        if (!navbarColor) { 
            navbarColor = getRandomColor(); 
        }
        this.style.backgroundColor = navbarColor; 
        this.style.transition = "background-color 0.3s ease-in-out"; 
    });
    navbar.addEventListener("mouseout", function () {
        this.style.backgroundColor = originalColor; // återställ till originalfärgen när musen lämnar
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


// Task 3.2
//Funktion för att skapa en bättre interaktion mellan användare och sökrutan.
function visaSökruta(){
	const searchBox=document.getElementById("sökruta"); // Hämta sökrutan
	searchBox.style.display="inline-block"; // visa sökrutan
	searchBox.style.backgroundColor="#e8f0fe";
	searchBox.style.border="2px solid #103e77";
	if(window.innerWidth < 768){
		searchBox.style.width= "80%";
	}
	else {
		searchBox.style.width="200px";
	}
	searchBox.focus();
}
// Dölj sökrutan om man klickar utanför den
function döljSökruta(event) {
    const searchBox = document.getElementById("sökruta");
	const searchLink = document.getElementById("söklänk");
    if(event.target !== searchBox && event.target !== searchLink && !searchBox.contains(event.target)){
		searchBox.style.display = "none"; // dölj sökrutan
	}
}
// När man klickar på söklänken, visa sökrutan
document.getElementById("söklänk").addEventListener("click", function (event) {
    event.preventDefault();
    visaSökruta();
	event.stopPropagation();
});
// Lyssna på klickhändelser för att dölja sökrutan om man klickar utanför
document.addEventListener("click", function(event){
	döljSökruta(event);
});
// Förhindra att sökrutan försvinner när man klickar i den
document.getElementById("sökruta").addEventListener("click", function (event) {
    event.stopPropagation();
});


// Task 4.1
// Användning av fadeTo() till navbaren
$(document).ready(function(){
	$(".navbar").hover(
		// synlighet för navbaren när musen pekar på den
		function(){
			$(this).fadeTo(300, 1);
		},
		//synlighet för navbaren när musen pekar bort från den.
		function(){
			$(this).fadeTo(300, 0.8);
		}
	);
});


// Task 4.2
// Expandering och kollapsing av bilder
document.addEventListener("DOMContentLoaded", function () {
    const bilderTitleBar = document.querySelector(".bilder .expandable-title-bar");
    const bilderContent = document.querySelector(".bilder .expandable-content-wrapper");
    const bilderPortfolio = document.querySelector(".bilder");
    const bilderIcon = document.querySelector(".bilder .expan-icon");
    const bilderTitle = bilderTitleBar.querySelector(".expandable-title");

    bilderTitleBar.addEventListener("click", function () {
        if (bilderContent.style.display === "none" || bilderContent.style.display === "") {
            bilderContent.style.display = "grid";
            bilderIcon.setAttribute("name", "chevron-up-outline");
            bilderPortfolio.appendChild(bilderTitleBar);
            bilderTitle.textContent = "Se mindre"; 
        } else {
            bilderContent.style.display = "none";
            bilderIcon.setAttribute("name", "chevron-back-outline");
            bilderPortfolio.insertBefore(bilderTitleBar, bilderContent);
            bilderTitle.textContent = "Se mer"; 
        }
    });

    // Videor
    const videorTitleBar = document.querySelector(".videor .expandable-title-bar");
    const videorContent = document.querySelector(".videor .expandable-content-wrapper");
    const videorPortfolio = document.querySelector(".videor");
    const videorIcon = document.querySelector(".videor .expan-icon");
    const videorTitle = videorTitleBar.querySelector(".expandable-title");
    videorTitleBar.addEventListener("click", function () {
        videorContent.classList.toggle("expanded");
        if (videorContent.classList.contains("expanded")) {
            videorIcon.setAttribute("name", "chevron-up-outline");
            videorPortfolio.appendChild(videorTitleBar);
            videorTitle.textContent = "Se mindre"; // Ändra texten
        } else {
            videorIcon.setAttribute("name", "chevron-back-outline");
            videorPortfolio.insertBefore(videorTitleBar, videorContent);
            videorTitle.textContent = "Se mer"; // Ändra texten
        }
    });
});


// Funktion för att skapa hover-effekt till bilder och videor
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".hover-image, .po-galleri video, .expandable-content-wrapper video").forEach(element => {
        element.addEventListener("mouseover", function () {
            this.style.transform = "scale(1.05)";  // Förstorar
            this.style.transition = "transform 0.3s ease-in-out"; // Mjuk animering
            this.style.filter = "brightness(1.2)"; // Ökar ljusstyrka
            this.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)"; // Skugga
        });
        element.addEventListener("mouseout", function () {
            this.style.transform = "scale(1)";  // Återställ storlek
            this.style.filter = "brightness(1.05)"; // Återställ ljusstyrka
            this.style.boxShadow = "none"; // Tar bort skugga
        });
    });
});
 
// Funktion för att expandera och kollapsa tidstabellen
document.addEventListener("DOMContentLoaded", function () {
    // Hitta alla månadselement
    const months = document.querySelectorAll(".m-item");
    months.forEach(month => {
        // Lägg till en klickhändelse för varje månad
        month.addEventListener("click", function () {
            // Toggle "expanded" klass på månadselementet
            this.classList.toggle("expanded");
            // Byt ikonen till "remove-outline" när expanderat, annars tillbaka till "add-outline"
            const icon = this.querySelector(".expand-icon");
            if (this.classList.contains("expanded")) {
                icon.setAttribute("name", "remove-outline");
            } else {
                icon.setAttribute("name", "add-outline");
            }
        });
    });
});





