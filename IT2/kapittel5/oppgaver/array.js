//Oppgave 1
var inp1 = document.querySelector("#inp1");
var btn1 = document.querySelector("#btn1");
var output1 = document.querySelector("#output1");

var navnArr = ["Erlend", "Jonatan", "Olivia", "Carlotte"];

//Funksjonen som legger til navnet fra input feltet kjører når jeg trykker på btn1
btn1.onclick = function leggTilNavn() {
  output1.innerHTML = "";
  navnArr.push(inp1.value);
  inp1.value = "";
  navnArr.sort();
  navnArr.reverse();
  for (var i = 0; i < navnArr.length; i++) {
    output1.innerHTML += navnArr[i]+"<br>";
  }
}

//Løkken ligger utanfor for at navnene skal vises også når siden åpnes
for (var i = 0; i < navnArr.length; i++) {
  output1.innerHTML += navnArr[i]+"<br>";
}

//Oppgave 2
//Variabler til input, knapper og p element
var inp2 = document.querySelector("#inp2");
var btn2_1 = document.querySelector("#btn2_1");
var btn2_2 = document.querySelector("#btn2_2");
var btn2_3 = document.querySelector("#btn2_3");
var output2 = document.querySelector("#output2");

var sum = 0;
var produkt = 1;

var tallArray = [];
tallArray[0] = 4;
tallArray[1] = 3;
tallArray[2] = 6;
tallArray[3] = 5;

//Div funksjoner
//Funksjonen legger til et tall fra input felt til arrayet tallArray
function leggTilTall() {
  for (var i = 0; i < tallArray.length; i++) {
    output2.innerHTML += tallArray[i]+"<br>";
  }
}
//Summerer alle tall i arrayet
function summer() {
  sum = 0
  for (var i = 0; i < tallArray.length; i++) {
    sum = sum + tallArray[i];
  }
}
//Multipliserer alle tall i arrayet
function multipliser() {
  produkt = 1;
  for (var i = 0; i < tallArray.length; i++) {
    produkt = produkt * tallArray[i];
  }
}

leggTilTall();

btn2_1.onclick = function() {
  if (inp2.value !== "") {
    output2.innerHTML = "";
    tallArray.push(Number(inp2.value));
    inp2.value = "";
    leggTilTall();
  }
  else {
    alert("Du må skrive inn et tall");
  }
}

btn2_2.onclick = function() {
  summer();
  output2.innerHTML += "Summen er "+sum+"<br>"
}

btn2_3.onclick = function() {
  multipliser();
  output2.innerHTML += "Produktet er "+produkt+"<br>"
}

//Oppgave 3
var btn3 = document.querySelector("#btn3")
var output3 = document.querySelector("#output3");
var min = tallArray[0];

function visMinste() {
  for (var i = 0; i < tallArray.length; i++) {
    if (tallArray[i]<min) {
      min = tallArray[i];
    }
  }
}
visMinste();
output3.innerHTML = "Minste verdi er "+min+"<br>";

btn3.onclick = function() {
  visMinste();
  output3.innerHTML = "Minste verdi er "+min+"<br>";
}

//Oppgave 4
var btn4 = document.querySelector("#btn4");
var output4 = document.querySelector("#output4");
var antall = 0;
var gjennomsnitt = 0;

function verdiGjennomsnitt() {
  summer();
  gjennomsnitt = sum/tallArray.length;
}

verdiGjennomsnitt();
output4.innerHTML = "Gjennomsnittet er "+gjennomsnitt+"<br>";

btn4.onclick = function() {
  verdiGjennomsnitt();
  output4.innerHTML = "Gjennomsnittet er "+gjennomsnitt+"<br>";
}
