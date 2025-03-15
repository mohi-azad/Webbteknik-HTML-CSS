// Funktion för att skapa ett antal bilder och rubriker
document.addEventListener("DOMContentLoaded", function(){
	// En lista över bilder och beskrivningar till hemsidan.
	const promotions = [
		{img: "pic/b1.png", text: "Fånga kärleken och minnen!"},
		{img: "pic/w1.png", text: "Fånga de bästa blicken på ditt liv!"},
		{img: "pic/w5.png", text: "Magiska ögonblick - Er bröllopsfotograf!"},
		{img: "pic/w6.png", text: "Ert sagobröllop - Fångat i tidlösa bilder!"}
	];

	// Användning av const för att slumpa index baserat på antalet objekt i fältet.
	const randomIndex = Math.floor(Math.random() * promotions.length);

	// Uppdatera bild och text i bannern.
	document.getElementById("promo-text").innerText = promotions[randomIndex].text;
	document.getElementById("promo-image").src = promotions[randomIndex].img;

});

document.addEventListener("DOMContentLoaded", function () {
    const promotions = [
        { img: "pic/b1.png", text: "Fånga kärleken och minnen!" },
        { img: "pic/w1.png", text: "Fånga de bästa blicken på ditt liv!" },
        { img: "pic/w2.png", text: "Magiska ögonblick - Er bröllopsfotograf!" },
        { img: "pic/w3.png", text: "Fånga kärleken och minnen!" }
    ];

    const randomIndex = Math.floor(Math.random() * promotions.length);
    const promoText = document.getElementById("promo-text");
    const promoImage = document.getElementById("promo-image");

    promoText.innerText = promotions[randomIndex].text;
    promoImage.src = promotions[randomIndex].img;
});

