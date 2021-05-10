function szamolasNegyzet() {  
    var aOldal = document.getElementById("oldal").value;
    var negyzetTerulet = "A területe " + aOldal * aOldal + " cm<sup>2</sup>.";
    document.getElementById("terulet").innerHTML = negyzetTerulet;
    var negyzetKerulet = "A kerülete " + aOldal * 4 + " cm.";
    document.getElementById("kerulet").innerHTML = negyzetKerulet;

  }
    


function szamolasKor(){
    var sugar = document.getElementById("sugar").value;
    var pi = 3.14
    
    var korTerulet = "A területe " + (sugar*sugar) * pi + " cm<sup>2</sup>.";
    document.getElementById("terulet").innerHTML = korTerulet;

    var korKerulet = "A kerülete " + (2 * sugar) * pi + " cm.";
    document.getElementById("kerulet").innerHTML = korKerulet;

  }

function szamolasKocka(){
    var aOldal = document.getElementById("oldal").value;
    var kockaFelszin = "A kocka felszíne " + (aOldal*aOldal) * 6 + " cm<sup>2</sup>."; 
    document.getElementById("felszin").innerHTML = kockaFelszin;
    var kockaTerfogat = "A kocka térfogata " + aOldal*aOldal*aOldal + " cm<sup>3</sup>.";
    document.getElementById("terfogat").innerHTML = kockaTerfogat;

  }

function szamolasTeglatest(){
    var aOldal = document.getElementById("a").value;
    var bOldal = document.getElementById("b").value;
    var cOldal = document.getElementById("c").value;
    var teglatestFelszin = "A téglatest felszíne " + 2 * (aOldal*bOldal+aOldal*cOldal+bOldal*cOldal) + " cm<sup>2</sup>.";
    document.getElementById("felszin").innerHTML = teglatestFelszin;
    var teglatestTerfogat = "A téglatest térfogata " + aOldal*bOldal*cOldal + " cm<sup>3</sup>.";
    document.getElementById("terfogat").innerHTML = teglatestTerfogat;
}
