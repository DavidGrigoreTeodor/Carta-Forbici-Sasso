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

    var sceltaComputer;

    //generatore numero casuale per la risposta computer
    num = Math.round(Math.random() * 3);

    //switch carta, sasso, forbici + risposta computer e utente
    switch (sceltaUtente) {
        case "carta":
            sceltaComputer = num;
            if (num == 0) {
                document.getElementById("titolo").innerHTML = "Rifai, pareggio!"
                document.getElementById("titsu").innerHTML = "Hai pareggiato";
            }
            if (num == 1) {
                sceltaComputer = "carta, pareggio!";
                document.getElementById("titolo").innerHTML = nomeGiocatore+ " hai scelto "+ sceltaUtente+ " il computer " +sceltaComputer;
                document.getElementById("titsu").innerHTML = "Hai pareggiato";
            }
            if (num == 2) {
                sceltaComputer = "forbici, hai perso!";
                document.getElementById("titsu").innerHTML = "Hai perso";
                document.getElementById("titolo").innerHTML = nomeGiocatore+ " hai scelto "+ sceltaUtente+ " il computer " +sceltaComputer;
            }
            if (num == 3) {
                sceltaComputer = "sasso, hai vinto";
                document.getElementById("titsu").innerHTML = "Hai vinto";
                document.getElementById("titolo").innerHTML = nomeGiocatore+ " hai scelto "+ sceltaUtente+ " il computer " +sceltaComputer;
            }
            break;

            case "sasso":
            sceltaComputer = num;
            if (num == 0) {
                document.getElementById("titolo").innerHTML = "Rifai, pareggio!"
                document.getElementById("titsu").innerHTML = "Hai pareggiato";
            }
            if (num == 1) {
                sceltaComputer = "forbici, hai vinto!";
                document.getElementById("titsu").innerHTML = "Hai vinto";
                document.getElementById("titolo").innerHTML = nomeGiocatore+ " hai scelto "+ sceltaUtente+ " il computer " +sceltaComputer;
            }
            if (num == 2) {
                sceltaComputer = "carta, hai perso!";
                document.getElementById("titsu").innerHTML = "Hai perso";
                document.getElementById("titolo").innerHTML = nomeGiocatore+ " hai scelto "+ sceltaUtente+ " il computer " +sceltaComputer;
            }
            if (num == 3) {
                sceltaComputer = "sasso, pareggio!";
                document.getElementById("titolo").innerHTML = nomeGiocatore+ " hai scelto "+ sceltaUtente+ " il computer " +sceltaComputer;
                document.getElementById("titsu").innerHTML = "Hai pareggiato";
            }
            break;
        case "forbici":
            sceltaComputer = num;
            if (num == 0) {
                document.getElementById("titsu").innerHTML = "Hai pareggiato";
                document.getElementById("titolo").innerHTML = "Rifai, pareggio!"
            }
            if (num == 1) {
                sceltaComputer = "carta, hai vinto!";
                document.getElementById("titsu").innerHTML = "Hai vinto";
                document.getElementById("titolo").innerHTML = nomeGiocatore+ " hai scelto "+ sceltaUtente+ " il computer " +sceltaComputer;
            }
            if (num == 2) {
                sceltaComputer = "sasso, hai perso!";
                document.getElementById("titsu").innerHTML = "Hai perso";
                document.getElementById("titolo").innerHTML = nomeGiocatore+ " hai scelto "+ sceltaUtente+ " il computer " +sceltaComputer;
            }
            if (num == 3) {
                sceltaComputer = "forbici, pareggio!";
                document.getElementById("titsu").innerHTML = "Hai pareggiato";
                document.getElementById("titolo").innerHTML = nomeGiocatore+ " hai scelto "+ sceltaUtente+ " il computer " +sceltaComputer;
            }
        break;
        case undefined:
            document.getElementById("titolo").innerHTML = "Non hai scelto niente, rifai!"
            break;
}
    
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