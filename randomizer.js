// Funktion för att skapa ett antal bilder och rubriker
document.addEventListener("DOMContentLoaded", function(){
	// En lista över bilder och beskrivningar till hemsidan.
	const promotions = [
		{img: "pic/b1.png", text: "FÅNGA KÄRLEKEN OCH MINNEN!"},
		{img: "pic/w1.png", text: "FÅNGA DE BÄSTA BLICKEN I LIVET!"},
		{img: "pic/w5.png", text: "MAGISKA ÖGONBLICK - ER BRÖLLOPSFOTOGRAF!"},
		{img: "pic/w6.png", text: "EET SAGABRÖLLOP - FÅNGATI TIDLÖSA BILDER!"}
	];
	// Användning av const för att slumpa index baserat på antalet objekt i fältet.
	const randomIndex = Math.floor(Math.random() * promotions.length);
	// Uppdatera bild och text i bannern.
	document.getElementById("promo-text").innerText = promotions[randomIndex].text;
	document.getElementById("promo-image").src = promotions[randomIndex].img;

});



