//Registrer bil
var inpMerke = document.querySelector("#inpMerke");
var inpModell = document.querySelector("#inpModell");
var inpRegNr = document.querySelector("#inpRegNr");
var btnLeggTil = document.querySelector("#btnLeggTil");
var btnVis = document.querySelector("#btnVis");
var tabell = document.querySelector("#tabell");

var bilInfo = [
  {merke:"Toyota",modell:"RAV4",regNr:"DA12345"},
  {merke:"Nissan",modell:"Leaf",regNr:"DB12345"}
]

function leggTil() {
  if (inpMerke.value !== "" && inpModell.value !== "" && inpRegNr.value !== "") {
    var fancy = inpRegNr.value;
    if (checkReg(fancy) == true) {
      bilInfo.push({merke:inpMerke.value,modell:inpModell.value,regNr:inpRegNr.value});
      bilInfo.sort(sorterNavn);
      visTabell();
      inpMerke.value = "";
      inpModell.value = "";
      inpRegNr.value = "";
    }
    else {
      alert("Denne bilen er allerede registrert");
    }
  }
  else {
    alert("Du må fylle inn alle feltene");
  }
}

function visTabell() {
  tabell.innerHTML = `
  <tr>
    <th>Merke</th>
    <th>Modell</th>
    <th>Registreringsnummer</th>
  </tr>`
  for (var info of bilInfo){
    //Mulighet 1
    var tabellelement = document.createElement("tr");
    var tb1 = document.createElement("td");
    var tb2 = document.createElement("td");
    var tb3 = document.createElement("td");

    tabell.appendChild(tabellelement);
    tabellelement.appendChild(tb1);
    tb1.innerHTML += info.merke;
    tabellelement.appendChild(tb2);
    tb2.innerHTML += info.modell;
    tabellelement.appendChild(tb3);
    tb3.innerHTML += info.regNr;

    //Mulihet 2
    //tabell.innerHTML += "<tr><td>"+info.merke+"</td><td>"+info.modell+"</td><td>"+info.regNr+"</td></tr>";

  }
}

function sorterNavn(a,b) {
  a = a.merke.toLowerCase();
  b = b.merke.toLowerCase();

  if (a<b) {
    return -1;
  }
  else if (a>b) {
    return 1;
  }
  else {
    return 0;
  }
}

function checkReg(fancy) {
  for (var i = 0; i < bilInfo.length; i++) {
    if (bilInfo[i].regNr == fancy) {
      return false;
    }
    return true;
  }
}

btnLeggTil.onclick = function() {
  leggTil();
}

btnVis.onclick = function() {
  bilInfo.sort(sorterNavn);
  visTabell();
}

//Registrer film
var inpFornavn = document.querySelector("#inpFornavn");
var inpEtternavn = document.querySelector("#inpEtternavn");
var inpFilm = document.querySelector("#inpFilm");
var btnRegistrer = document.querySelector("#btnRegistrer");
var utskrift = document.querySelector("#utskrift");

var sum = 0;

var filmInfo = [
  {fornavn:"Aleksander",etternavn:"Ulven",antFilmer:"33"},
  {fornavn:"Jarand",etternavn:"Westerheim",antFilmer:"28"},
  {fornavn:"Martin",etternavn:"Engelstad",antFilmer:"38"}
]

function showInfo() {
  if (inpFornavn.value !== "" && inpEtternavn.value !== ""&& inpFilm.value!== "") {
    utskrift.innerHTML = "";
    filmInfo.push({fornavn:inpFornavn.value,etternavn:inpEtternavn.value,antFilmer:Number(inpFilm.value)});
    filmInfo.sort(sortNumber);
    inpFornavn.value = "";
    inpEtternavn.value = "";
    inpFilm.value = "";
    for (var value of filmInfo) {
      utskrift.innerHTML += "<ul><li>"+value.fornavn+" "+value.etternavn+" har sett "+value.antFilmer+" filmer i år.</li></ul>";
    }
    for (var i = 0; i < filmInfo.length; i++) {
      sum = sum + filmInfo.antFilmer;
    }
    utskrift.innerHTML += "Totalt "+sum+" filmer."
  }
}

function sortNumber(a,b) {
  return b.antFilmer-a.antFilmer;
}

btnRegistrer.onclick = function() {
  showInfo();
}
