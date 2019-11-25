//Viktige variabler
var forsok = document.querySelector("#forsok");
var bokstavInp = document.querySelector("#bokstavInp");
var btnReg = document.querySelector("#btnReg");
var visOrd = document.querySelector("#visOrd");
var visPrøvde = document.querySelector("#visPrøvde");
var visFeil = document.querySelector("#visFeil");
var antForsok = 8;

//Ulike arrayer
var ordArr = ["G", "I", "T", "A", "R"]; //Array med riktig ord.
var bokstavArr = []; //Array med prøvde bokstaver
var riktigArr = []; //Array som skal skrives ut på siden.

updateBokstavArr();
function updateBokstavArr() { //Gir riktig lengde til riktigArr.
  for(bokstav in ordArr){
    riktigArr.push("_");
  }
}

btnReg.onclick = function() {
  leggTilBokstav();
}

function leggTilBokstav() { //Sjekker om det er skrevet inn et tall eller en bkstav.
  if (isNaN(bokstavInp.value)) {
    bokstavArr.push(bokstavInp.value.toUpperCase()); //Legger til i med stor bokstav i bokstavArr.
    bokstavInp.value = ""; //Fjerner det som står i input feltet.
  }
  else {
    visFeil.innerHTML = "Du kan ikke skrive inn et tall!";
    bokstavInp.value = ""; //Fjerner det som står i input feltet.
  }
  sjekkBokstav();
}

function sjekkBokstav() {
  for (var i = 0; i < ordArr.length; i++) {
    for (var j = 0; j < bokstavArr.length; j++) {
      if (ordArr[i] == bokstavArr[j]) { //Hvis en bokstav i ordArr er lik en bokstav i bokstavArr,
        riktigArr[i] = ordArr[i]; //Settes den bokstaven på riktig plass i riktigArr.
        printRiktigArr();
      }
      else {
        printPrøvde();
      }
    }
  }
  tegnMann();
}

function printRiktigArr() {
  visOrd.innerHTML = "";
  for(item in riktigArr) {
    visOrd.innerHTML += riktigArr[item]+", ";
  }
}

function printPrøvde() {
  visPrøvde.innerHTML = "";
  for (item in bokstavArr) {
    visPrøvde.innerHTML += bokstavArr[item]+", ";
  }
}

function tegnMann() {
  antForsok = antForsok - 1;
  forsok.innerHTML = "Antall forsøk: "+antForsok;
}
/*
function sjekkBokstav() {
  visOrd.innerHTML = "";
  for (var i = 0; i < ordArr.length; i++) {
    for (var j = 0; j < bokstavArr.length; j++) {
      if (ordArr[i] == bokstavArr[j]) {
        visOrd.innerHTML += ordArr[i]+", ";
      }
      else {
        visOrd.innerHTML += "_"+", ";
      }
    }
  }
}
*/


//Funksjon som skjekker om bokstavene i arrayet er med i hangman ordet
//If, viser bokstaven(e)
//Else, kjører en løkke som tegner neste steg i hangman,
//ett mindre forsøk, viser brukte bokstaver


//
