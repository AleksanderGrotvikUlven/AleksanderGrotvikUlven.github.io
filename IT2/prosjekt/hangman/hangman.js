//Viktige variabler
var forsok = document.querySelector("#forsok");
var bokstavInp = document.querySelector("#bokstavInp");
var btnReg = document.querySelector("#btnReg");
var visOrd = document.querySelector("#visOrd");
var visPrøvde = document.querySelector("#visPrøvde");
var visFeil = document.querySelector("#visFeil");
var canvas = document.querySelector("#canvas");
var ctx = canvas.getContext("2d");
var antForsok = 8;

//Ulike arrayer
var ordArr = ["S", "A", "N", "D", "V", "I", "K", "A"]; //Array med riktig ord, ordet kan byttes ut med hvilket som helst annet ord. 
var bokstavArr = []; //Array med prøvde bokstaver
var riktigArr = []; //Array som skal skrives ut på siden.

ctx.strokeRect(0,0,800,550); //Tegner border rundt canvas
updateBokstavArr(); //Kjører funksjonen i det siden åpnes slik at det vises på siden.
printRiktigArr(); //Kjører funksjonen i det siden åpnes slik at det vises på siden.

function updateBokstavArr() { //Gir riktig lengde til riktigArr.
  for(bokstav in ordArr){
    riktigArr.push("_");
  }
}

btnReg.onclick = function() { //Kjører funksjon når man trykker på btnReg
  leggTilBokstav();
}
bokstavInp.onkeydown = function(e) { //Kjører funksjon når man trykker på enter
  if (e.keyCode == 13) {
    leggTilBokstav();
  }
}


function leggTilBokstav() { //Sjekker om det er skrevet inn et tall eller en bkstav.
  if (isNaN(bokstavInp.value)) {
    visFeil.innerHTML = ""; //Fjerner feilmeldingen man kunne fått når en bokstav blir skrevet inn.
    bokstavArr.push(bokstavInp.value.toUpperCase()); //Legger til i med stor bokstav i bokstavArr.
    bokstavInp.value = ""; //Fjerner det som står i input feltet.
  }
  else {
    visFeil.innerHTML = "Du må skrive en bokstav!";
    bokstavInp.value = ""; //Fjerner det som står i input feltet.
    return;
  }
  sjekkBokstav();
  printPrøvde();
}

function sjekkBokstav() { //Sjekker om bokstaven som er skrevet inn er med i det riktige ordet
  for (var i = 0; i < ordArr.length; i++) {
    for (var j = 0; j < bokstavArr.length; j++) {
      if (ordArr[i] == bokstavArr[j] && riktigArr[i] == "_") { //Hvis en bokstav i ordArr er lik en bokstav i bokstavArr,
        riktigArr[i] = ordArr[i]; //Settes den bokstaven på riktig plass i riktigArr.
        sjekkToLike(ordArr[i]);
        printRiktigArr();
        duVant();
        return;
      }
    }
  }
  tegnMann(); //Tegner i canvas og teller antall liv.
}

function printPrøvde() { //Viser prøvde bokstaver på sjermen
  visPrøvde.innerHTML = "";
  for (item in bokstavArr) {
    visPrøvde.innerHTML += bokstavArr[item]+", ";
  }
}

function sjekkToLike(x) { //Funksjon brukes hvis man bytter ut ordArr til et ord med to like bokstaver.
  for (var i = 0; i < ordArr.length; i++) {
    for (var j = 0; j < ordArr.length; j++) {
      if (i !== j && ordArr[i] == ordArr[j] && ordArr[i] == x) { //Ulike hendelser som må ligge til rette for atfunksjonen skal starte.
        riktigArr[j] = ordArr[j];
      }
    }
  }
}

function printRiktigArr() { //Viser riktig bokstaver på skjermen.
  visOrd.innerHTML = "";
  for(item in riktigArr) {
    visOrd.innerHTML += riktigArr[item]+", ";
  }
}

function duVant() { //Funksjon med beskjed til spiller om at spillet er vunnet
  for (var i = 0; i < ordArr.length; i++) {
    if (ordArr[i] !== riktigArr[i]) {
      return;
    }
  }
  visFeil.innerHTML = '<h1>Du vant!</h1>';
  visFeil.innerHTML += '<button type="button" id="btnStatus" onClick="javascript:history.go(0)">Prøv igjen</button>';
}

function duTapte() { //Funksjon med beskjed til spiller om at spillet er tapt
  visFeil.innerHTML = '<h1>Du tapte!</h1>';
  visFeil.innerHTML += '<button type="button" id="btnStatus" onClick="javascript:history.go(0)">Prøv igjen</button>';
}

function tegnMann() {
  antForsok = antForsok-1;
  forsok.innerHTML = "Antall forsøk: "+antForsok;
  if (antForsok == 7) {
    ctx.lineWidth = 8;
    ctx.moveTo(50,520);
    ctx.lineTo(50,500);
    ctx.lineTo(750,500);
    ctx.lineTo(750,520);
    ctx.stroke();
  }
  else if (antForsok == 6) {
    ctx.lineWidth = 6;
    ctx.moveTo(200,500);
    ctx.lineTo(200,50);
    ctx.lineTo(450,50);
    ctx.lineTo(450,100);
    ctx.moveTo(300,500);
    ctx.lineTo(200,400);
    ctx.stroke();
  }
  else if (antForsok == 5) {
    ctx.lineWidth = 4;
    ctx.moveTo(490,140);
    ctx.arc(450,140,40, 0, 2*Math.PI);
    ctx.moveTo(439,130);
    ctx.arc(435,130,4, 0, 2*Math.PI);
    ctx.moveTo(469,130);
    ctx.arc(465,130,4, 0, 2*Math.PI);
    ctx.moveTo(450,140);
    ctx.lineTo(450,145);
    ctx.moveTo(435,165);
    ctx.arc(450,165,15, 1*Math.PI, 0);
    ctx.stroke();
  }
  else if (antForsok == 4) {
    ctx.lineWidth = 4;
    ctx.moveTo(450,180);
    ctx.lineTo(450,320);
    ctx.stroke();
  }
  else if (antForsok == 3) {
    ctx.lineWidth = 4;
    ctx.moveTo(450,200);
    ctx.lineTo(400,250);
    ctx.stroke();
  }
  else if (antForsok == 2) {
    ctx.lineWidth = 4;
    ctx.moveTo(450,200);
    ctx.lineTo(500,250);
    ctx.stroke();
  }
  else if (antForsok == 1) {
    ctx.lineWidth = 4;
    ctx.moveTo(450,320);
    ctx.lineTo(400,370);
    ctx.stroke();
  }
  else if (antForsok == 0) {
    ctx.lineWidth = 4;
    ctx.moveTo(450,320);
    ctx.lineTo(500,370);
    ctx.stroke();
    duTapte();
  }
}

//
