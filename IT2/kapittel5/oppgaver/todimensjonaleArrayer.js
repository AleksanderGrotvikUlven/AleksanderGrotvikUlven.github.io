//Oppgave 1
var inpTall1 = document.querySelector("#inpTall1");
var inpTall2 = document.querySelector("#inpTall2");
var btnVis = document.querySelector("#btnVis");
var utskrift = document.querySelector("#utskrift");
var gangeArr=[];
var sum=0;

for (var i = 0; i <= 10; i++) {
  gangeArr[i]=[];
}

for (i = 0; i <= 10; i++) {
  for (var j = 0; j <= 10; j++) {
    sum=i*j;
    gangeArr[i][j]=sum;
  }
  utskrift.innerHTML += gangeArr[i]+"<br>";
}

var T1=0
var T2=0
btnVis.onclick = function() {
  T1 = inpTall1.value
  T2 = inpTall2.value
  utskrift.innerHTML = "Summen er: "+gangeArr[T1][T2]+"<br>";
}

//Oppgave 2
var dagArr=["mandag","tirsdag"];
var timeplan=[]
timeplan[0]=["s2", "s2", "s2", "gym", "gym", "gym"];
timeplan[1]=["norsk", "norsk", "norsk", "norsk", "norsk"];

btnReg.onclick = function() {

}
