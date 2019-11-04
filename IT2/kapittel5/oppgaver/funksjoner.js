//Oppgave 1
var dinHilsen = tilfeldigHilsen(Math.floor(Math.random()*3)+1);
var output1 = document.querySelector("#output1");
function tilfeldigHilsen(number) {
  if (number===1) {
    return "Hei!";
  }
  else if (number===2) {
    return "Hallo!";
  }
  else {
    return "God dag!";
  }
}
output1.innerHTML += dinHilsen + "<br>"; //Skriver ut første hilsen

//Oppgave 2
var canvas2 = document.querySelector("#canvas2");
var ctx = canvas2.getContext("2d");
var radius = 30;
var x = 30;
var y = 30;

while (x<=270)  {
  function tegnSirkel(x,y) {
    ctx.beginPath();
    ctx.arc(x,y,radius, 0, 2*Math.PI);
    ctx.stroke();
    ctx.closePath();
  }
  function flyttX() {
    x=x+20;
  }
  function flyttY() {
    y=y+20;
  }
  tegnSirkel(x,y);
  flyttX();
  flyttY();
}

//Oppgave 3
var output3 = document.querySelector("#output3");
var canvas3 = document.querySelector("#canvas3");
var ctx = canvas3.getContext("2d");
var x = 150;
var y = 150;
var areal = radius*radius*Math.PI

function radiusSirkel(radius) {
  ctx.beginPath();
  ctx.arc(x,y,radius, 0, 2*Math.PI);
  ctx.stroke();
  ctx.closePath();
}
radiusSirkel(100);
output3.innerHTML = "Arealet av en sirkel med radius " + radius + " er " + areal

//Oppgave 4
var output4 = document.querySelector("#output4");

function tegnKatt() {
  output4.innerHTML = "=^.^="
}
tegnKatt();

//Oppgave 5
var output5 = document.querySelector("#output5");

function tegnKatt5(antall) {
  for (var i = 0; i < antall; i++) {
    output5.innerHTML += "=^.^= <br>"
  }
}
tegnKatt5(4);

//Oppgave 6
var output6 = document.querySelector("#output6");

function alderPerson(alder) {
  if (alder > 18) {
    return "Voksen";
  }
  else if (alder > 16) {
    return "Ungdom";
  }
  return "Barn";
}
var dinAlder = alderPerson(30);
output6.innerHTML += dinAlder + "<br>"
dinAlder = alderPerson(17);
output6.innerHTML += dinAlder + "<br>"
dinAlder = alderPerson(6);
output6.innerHTML += dinAlder + "<br>"

//Oppgave 7
var output7 = document.querySelector("#output7");
tallTil(20);
function tallTil(tall) {
  for (var i = 0; i < tall; i++) {
    if (i%2 !== 0) {
      output7.innerHTML += i + "<br>";
    }
  }
}

//Oppgave 8
var output8 = document.querySelector("#output8");
navneskilt("Tard");
function navneskilt(navn) {
  for (var i = 0; i < navn.length+2; i++) {
    output8.innerHTML += "*";
  }
  output8.innerHTML += "<br> * "+navn+" * <br>";
  for (var i = 0; i < navn.length+2; i++) {
    output8.innerHTML += "*";
  }
}

//Oppgave 9
var output9 = document.querySelector("#output9");
function finnFart(strekning, tid) {
  var fart = strekning / tid;
  return fart;
}
var funnetFart = finnFart(50, 2);
output9.innerHTML = funnetFart;

//Oppgave 10
var output10 = document.querySelector("#output10");
function terning(terningkast) {
  var verdi = terningkast;
  return verdi
}
var verdiTerning = terning(Math.floor(Math.random()*6+1));
output10.innerHTML = verdiTerning;

//Oppgave 11
var output11 = document.querySelector("#output11");
var verdiToTerninger = toTerninger(Math.floor(Math.random()*6+1), Math.floor(Math.random()*6+1));

function toTerninger(terning1, terning2) {
  var terning = terning1 + terning2;
  if (terning1 == terning2) {
    output11.innerHTML = "Du slo to like med verdien " + terning1;
  }
  else if (terning == 7) {
    output11.innerHTML = "Du fikk totalt 7. Terning en viste " + terning1 + "og terning to viste " + terning2;
  }
  else {
    output11.innerHTML = "Terning en viste " + terning1 + " og terning to viste " + terning2;
  }
}

//Oppgave 12
var output12 = document.querySelector("#output12");
var antallKast = 0;

function genererTerning() {
  var t1 = Math.floor(Math.random()*6+1);
  var t2 = Math.floor(Math.random()*6+1);
  toLike(t1, t2);
}

function toLike(t1, t2) {
  antallKast = antallKast+1;
  if (t1 == t2) {
    output12.innerHTML += "Terning en: " + t1 + " og terning to: " + t2 + "<br>" + "Du brukte "+antallKast+" kast.";
    return;
  }
  else {
    output12.innerHTML += "Terning en: " + t1 + " og terning to: " + t2 + "<br>";
    genererTerning();
  }
}
genererTerning();
