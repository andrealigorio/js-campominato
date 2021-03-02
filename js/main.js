function myFunction() {

const pcRandomNumber = 16;

var difficulty;
var flag = false;
while (flag == false) {
    var difficultyChoise = document.getElementById("level").value;
    var minefield;
    var minefieldHard;
    switch (difficultyChoise) {
        case "easy":
            difficulty = 100;
            flag = true;
            break;
        case "medium":
            difficulty = 80;
            minefield = document.getElementById("hard");
            minefield.className = "hidden";
            flag = true;
            break;
        case "hard":
            difficulty = 50;
            minefield = document.getElementById("medium");
            minefield.className = "hidden";
            minefieldHard = document.getElementById("hard");
            minefieldHard.className = "hidden";
            flag = true;
            break;
            
        }
}
var pcArrayNumber = [];
var userNumber; 
var arrayUser = [];
var punteggio;
var box;


while (pcArrayNumber.length < pcRandomNumber) {
    var pcNumber = randomNumber(1, difficulty);
    if(!isInArray(pcArrayNumber, pcNumber)) {
        pcArrayNumber.push(pcNumber);
    }
}

console.log(pcArrayNumber);


// Il ciclo while termina se il numero utente fa parte dell'array numeri perdenti o se la lunghezza dell'array utente raggiunge la differenza tra i numeri totali e quelli perdenti
while ((!isInArray(pcArrayNumber, userNumber)) && ((arrayUser.length) < (difficulty - pcRandomNumber))) {
    flag = false;
    while (flag == false) {
            userNumber = prompt("Inserisci un numero da 1 a " + difficulty);
            if (isNaN(userNumber) || (userNumber.includes("."))) {
                alert("inserisci un numero!!!");
            } else if ((userNumber < 1) || (userNumber > difficulty)) {
                alert("Inserisci un numero compreso tra 1 e " + difficulty);
            } else {
                flag = true;
            }
        }
        if (!isInArray(arrayUser, userNumber)) {
            if (!isInArray(pcArrayNumber, userNumber)) {
                arrayUser.push(userNumber);
                box = document.getElementById("box" + userNumber);
                box.className = "check";
            }
            else {
                box = document.getElementById("box" + userNumber);
                box.className = "mine";
            }
        } else {
            alert("Numero già inserito... ripetere!");
        }
}
    
    punteggio = arrayUser.length;
    
    /* Con un if controllo se è stato raggiunto il punteggio massimo o è stato pescato un numero perdente */
    if ((!isInArray(pcArrayNumber, arrayUser[arrayUser.length])) && arrayUser.length == (difficulty - pcRandomNumber)) {
        for(var i=0; i < pcArrayNumber.length; i++) {
            box = document.getElementById("box" + pcArrayNumber[i]);
            box.className = "mine";
        }
        document.getElementById("result").innerHTML = "Complimenti hai fatto il punteggio massimo: " + arrayUser.length + " punti.";
    } else {
        for (var i = 0; i < pcArrayNumber.length; i++) {
            box = document.getElementById("box" + pcArrayNumber[i]);
            box.className = "mine";
        }
        document.getElementById("result").innerHTML = "La partita è terminata ed hai fatto " + punteggio + " punti.";
    }
    
    console.log(arrayUser);
    console.log(punteggio);
    
    function isInArray(array, value) {
        for (var i = 0; i < array.length; i++) {
            if (array[i] == value) {
                return true;
            }
        }
        return false;
    }
    
    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    
}
function myFunctionReset() {
    location.reload();
}