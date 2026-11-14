const varvid = ["roosa", "pruun", "vanill"];

// Salvestame õppenõuanded järjendisse
const nouanded = ["Vaimne ja füüsiline tervis on õppimise vundament. Enne õppesessiooni veendu, et oled piisavalt maganud ja söönud.", "Ära looda pelgalt mälule. Jaga suured ülesanded väiksemateks sammudeks ja kasuta kalendrit.", "Pelgalt ülelugemise asemel testi ennast mälu järgi. Teadmiste meenutamine kinnistab õpitut kordades paremini."];
const nouandeTekst = document.querySelector(".study-tip");
const nouandeNupp = document.querySelector(".next-tip");

// Funktsioon, mis vahetab õppenõuannet juhuslikult
let eelmineIndeks = -1;
function vahetaNouannet() {
  let juhuslikIndeks = Math.floor(Math.random() * nouanded.length);
  while (juhuslikIndeks === eelmineIndeks) {
    juhuslikIndeks = Math.floor(Math.random() * nouanded.length);
  }
  eelmineIndeks = juhuslikIndeks;
  nouandeTekst.textContent = nouanded.at(juhuslikIndeks);
}

// Lisame nupule klikkimise sündmuse kuulaja, mis käivitab vahetaNouannet funktsiooni
nouandeNupp.addEventListener("click", vahetaNouannet);

const motteterad = ["Iga päev ei pruugi olla hea, kuid igas päevas on midagi head.", "Väikesed igapäevased sammud viivad suurte muutusteni.", "Sinu tavaline päev võib olla kellegi teise unistus, ole iga päeva eest tänulik."];
const motteteraTekst = document.querySelector(".quote-text");

// Funktsioon, mis vahetab mõttetera juhuslikult
function vahetaTera() {
  const juhuslikIndeks = Math.floor(Math.random() * motteterad.length);
  motteteraTekst.textContent = motteterad.at(juhuslikIndeks);
}
vahetaTera();
