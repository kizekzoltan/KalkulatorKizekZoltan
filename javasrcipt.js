function szamolasNegyzet() {  
    var aOldal = parseInt(document.getElementById("oldal").value);
    var negyzetTerulet = "A területe " + aOldal * aOldal + " cm<sup>2</sup>.";
    document.getElementById("terulet").innerHTML = negyzetTerulet;
    var negyzetKerulet = "A kerülete " + aOldal * 4 + " cm.";
    document.getElementById("kerulet").innerHTML = negyzetKerulet;
    
    if (aOldal <= 0) {
      alert("Nem lehet a beírt adat 0 vagy annál kisebb szám!")
      document.getElementById("oldal").value = "";
  }
  }
    


function szamolasKor(){
    var sugar = parseInt(document.getElementById("sugar").value);
    var pi = 3.14
    
    var korTerulet = "A területe " + (sugar*sugar) * pi + " cm<sup>2</sup>.";
    document.getElementById("terulet").innerHTML = korTerulet;

    var korKerulet = "A kerülete " + (2 * sugar) * pi + " cm.";
    document.getElementById("kerulet").innerHTML = korKerulet;

    if (sugar <= 0) {
      alert("Nem lehet a beírt adat 0 vagy annál kisebb szám!")
      document.getElementById("sugar").value = "";
  }

  }

function szamolasKocka(){
    var aOldal = parseInt(document.getElementById("oldal").value);
    var kockaFelszin = "A kocka felszíne " + (aOldal*aOldal) * 6 + " cm<sup>2</sup>."; 
    document.getElementById("felszin").innerHTML = kockaFelszin;
    var kockaTerfogat = "A kocka térfogata " + aOldal*aOldal*aOldal + " cm<sup>3</sup>.";
    document.getElementById("terfogat").innerHTML = kockaTerfogat;

    if (aOldal <= 0) {
      alert("Nem lehet a beírt adat 0 vagy annál kisebb szám!")
      document.getElementById("oldal").value = "";
  }

  }

function szamolasTeglatest(){
    var aOldal = parseInt(document.getElementById("a").value);
    var bOldal = parseInt(document.getElementById("b").value);
    var cOldal = parseInt(document.getElementById("c").value);
    var teglatestFelszin = "A téglatest felszíne " + 2 * (aOldal*bOldal+aOldal*cOldal+bOldal*cOldal) + " cm<sup>2</sup>.";
    document.getElementById("felszin").innerHTML = teglatestFelszin;
    var teglatestTerfogat = "A téglatest térfogata " + aOldal*bOldal*cOldal + " cm<sup>3</sup>.";
    document.getElementById("terfogat").innerHTML = teglatestTerfogat;

  if (aOldal <= 0) {
      alert("Nem lehet a beírt adat 0 vagy annál kisebb szám!")
      document.getElementById("a").value = "";
  }
  if (bOldal <= 0) {
      alert("Nem lehet a beírt adat 0 vagy annál kisebb szám!")
      document.getElementById("b").value = "";
  }
  if (cOldal <= 0) {
      alert("Nem lehet a beírt adat 0 vagy annál kisebb szám!")
      document.getElementById("c").value = "";
  }

}
