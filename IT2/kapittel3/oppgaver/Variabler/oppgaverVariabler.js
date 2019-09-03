//Oppgave 1
var lengde = prompt("Skriv inn lengde i cm.");
var høyde = prompt("Skriv inn høyde i cm.");
//1a
var sumAreal = Number(lengde) * Number(høyde);
var oppgave1a = document.querySelector("#oppgave1a");
oppgave1a.innerHTML = ("Arealet er: " + sumAreal + "cm");
//1b
var sumOmkrets = Number(lengde)*2 + Number(høyde)*2;
var oppgave1b = document.querySelector("#oppgave1b");
oppgave1b.innerHTML = ("Omkretsen er: " + sumOmkrets + "cm");

//Oppgave 2
var gammelPris = prompt("Skriv inn prisen til varen i kroner.");
var rabatt = prompt("Skriv inn rabatten til varen i prosent.");
var rabattKr = Number(rabatt)/100 * Number(gammelPris);
var nyPris = Number(gammelPris) - (Number(rabatt)/100 * Number(gammelPris));
var oppgave2 = document.querySelector("#oppgave2");
oppgave2.innerHTML = ("Gammel pris var: " + gammelPris + "kr");
oppgave2.innerHTML += ("<br>" + "Rabatten på " + rabatt + "% " + "gjør at produktet blir "+ rabattKr + "kr billigere");
oppgave2.innerHTML += ("<br>" + "Ny pris er: " + nyPris + "kr");

//Oppgave 3
var navn = prompt("Hva heter du?");
var alder = prompt("Hvor gammel er du?");
var årTilHundre = 100 - Number(alder);
var oppgave3 = document.querySelector("#oppgave3");
oppgave3.innerHTML = ("Hei, " + navn + "! Du er " + alder + " år gammel. Det er " + årTilHundre + " år igjen til 100-årsdagen din!");

//Oppgave 4
var temperatur = prompt("Skriv inn ønsket temperatur.");
var dag = Number(temperatur) - 5;
var natt = Number(temperatur) - 8;
var oppgave4 = document.querySelector("#oppgave4");
oppgave4.innerHTML = ("Du har ønske om en temperatur på " + temperatur + " grader. Vi har beregnet dag-temperaturen din til " + dag + " grader, og natt-temperaturen din til " + natt + " grader.")
