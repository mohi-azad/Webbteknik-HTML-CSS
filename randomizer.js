document.addEventListener("DOMContentLoaded", function(){
	// En lista över bilder och beskrivningar till hemsidan.
	const promotions = [
		{img: "pic/p1.png", text: "Fånga de bästa blicken på ditt liv!"},
		{img: "pic/p3.png", text: "Magiska ögonblick - Er bröllopsfotograf!"},
		{img: "pic/p4.png", text: "Fånga kärleken och minnen!"}
	];

	// Användning av const för att slumpa index baserat på antalet objekt i fältet.
	const randomIndex = Math.floor(Math.random() * promotions.length);

	// Uppdatera bild och text i bannern.
	document.getElementById("promo-text").innerText = promotions[randomIndex].text;
	document.getElementById("promo-image").src = promotions[randomIndex].img;

})