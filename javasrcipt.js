function szamolasNegyzet() {  
    var aOldal = document.getElementById("oldal").value;
    var negyzetTerulet = "A területe " + aOldal * aOldal + " cm.";
    document.getElementById("terulet").innerHTML = negyzetTerulet;
    var negyzetKerulet = "A kerülete " + aOldal * 4 + " cm.";
    document.getElementById("kerulet").innerHTML = negyzetKerulet;
  }

function szamolasHaromszog(){
    var aOldal = document.getElementById("aoldal").value;
    var bOldal = document.getElementById("boldal").value;
    var cOldal = document.getElementById("coldal").value;
    var magassag = document.getElementById("magassag").value;
    
    var haromszogTerulet = "A területe " + (aOldal * magassag) / 2 + " cm.";
    document.getElementById("terulet").innerHTML = haromszogTerulet;

    var haromszogKerulet = aOldal+bOldal+cOldal;
    document.getElementById("kerulet").innerHTML = haromszogKerulet;
  }

function szamolasKocka(){
    var aOldal = document.getElementById("oldal").value;
    var kockaFelszin = "A kocka felszíne " + (aOldal*aOldal) * 6 + " cm."; 
    document.getElementById("felszin").innerHTML = kockaFelszin;
    var kockaTerfogat = "A kocka felszíne " + aOldal*aOldal*aOldal + " cm.";
    document.getElementById("terfogat").innerHTML = kockaTerfogat;
  }

function szamolasTeglatest(){
    var aOldal = document.getElementById("a").value;
    var bOldal = document.getElementById("b").value;
    var cOldal = document.getElementById("c").value;
    var teglatestFelszin = "A téglatest felszíne " + 2 * (aOldal*bOldal+aOldal*cOldal+bOldal*cOldal) + " cm.";
    document.getElementById("felszin").innerHTML = teglatestFelszin;
    var teglatestTerfogat = "A téglatest térfogata " + aOldal*bOldal*cOldal + " cm.";
    document.getElementById("terfogat").innerHTML = teglatestTerfogat;
  }