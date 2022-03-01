var nomeGiocatore = prompt("Inserire il proprio nome");

var sceltaUtente;

//varie funzioni per i click
function cliccatoCarta() {
    sceltaUtente = "carta";
    document.getElementById("carta").style.backgroundColor = "red";
    document.getElementById("forbici").style.backgroundColor = "yellow";
    document.getElementById("sasso").style.backgroundColor = "yellow";
}
function cliccatoForbici() {
    sceltaUtente = "forbici";
    document.getElementById("forbici").style.backgroundColor = "red";
    document.getElementById("sasso").style.backgroundColor = "yellow";
    document.getElementById("carta").style.backgroundColor = "yellow";
}
function cliccatoSasso() {
    sceltaUtente = "sasso";
    document.getElementById("sasso").style.backgroundColor = "red";
    document.getElementById("carta").style.backgroundColor = "yellow";
    document.getElementById("forbici").style.backgroundColor = "yellow";
}

//scomparsa delle cose per la risposta 
function verdetto() {
    document.getElementById("carta").style.display = "none";
    document.getElementById("forbici").style.display = "none";
    document.getElementById("sasso").style.display = "none";
    document.getElementById("conferma").style.display = "none";
    document.getElementById("fai").style.display = "none";
    document.getElementById("box").style.display = "none";
    document.getElementById("box2").style.display = "block"
    document.getElementById("titsu").innerHTML = "Hai perso";

    var sceltaComputer;

    //vari if per le risposte del computer
    if(sceltaUtente == "carta"){
        sceltaComputer = "forbici. Riprovaci!";
    }
    if(sceltaUtente == "forbici"){
        sceltaComputer = "sasso. Riprovaci!";
    }
    if(sceltaUtente == "sasso"){
        sceltaComputer = "carta. Riprovaci!";
    }
    if (sceltaUtente == undefined) {
        sceltaUtente = "niente"
        sceltaComputer = "niente, rifai!"
    }
    
    document.getElementById("titolo").innerHTML = nomeGiocatore+ " hai perso, tu hai scelto " + sceltaUtente + " il computer ha scelto " + sceltaComputer;
}

function tornaIndietro(){

    //scelte cancellate al click torna indietro
    sceltaUtente = undefined;
    sceltaComputer = undefined;

    //far rivedere le cose perse al click trona indietro
    document.getElementById("carta").style.display = "block";
    document.getElementById("forbici").style.display = "block";
    document.getElementById("sasso").style.display = "block";
    document.getElementById("conferma").style.display = "block";
    document.getElementById("conferma2").style.display = "block";
    document.getElementById("fai").style.display = "block";
    document.getElementById("box").style.display = "block";
    document.getElementById("box2").style.display = "none"

    // inline al click torna indietro
    document.getElementById("conferma").style.float = "left";
    document.getElementById("conferma2").style.float = "left";

    //spazi al click torna indietro
    document.getElementById("conferma").style.marginRight = "25px";
    document.getElementById("conferma2").style.marginRight = "25px";

    //colori al click torna indietro
    document.getElementById("sasso").style.backgroundColor = "yellow";
    document.getElementById("carta").style.backgroundColor = "yellow";
    document.getElementById("forbici").style.backgroundColor = "yellow";

    //title riapparso come prima
    document.getElementById("titsu").innerHTML = "Carta-Forbici-Sasso";

    //scomparsa dell'innerHTML (del titolo)
    document.getElementById("titolo").innerHTML = "";
}