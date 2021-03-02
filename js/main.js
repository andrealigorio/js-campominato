const pcRandomNumber = 16;

var difficulty;
var flag = false;
while (flag == false) {
    var difficultyChoise = prompt("Inserisci la difficoltà:\n0 : Facile\n1 : Medio\n2 : Difficile");
    switch (difficultyChoise) {
        case "0":
            difficulty = 100;
            flag = true;
            break;
        case "1":
            difficulty = 80;
            flag = true;
            break;
        case "2":
            difficulty = 50;
            flag = true;
            break;
        default:
            alert("Devi inserire un numero da 0 a 2!");
    }
}
var pcArrayNumber = [];
var userNumber; 
var arrayUser = [];
var punteggio;

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
            alert("inserisci un numero!!!")
        } else if ((userNumber < 1) || (userNumber > difficulty)) {
            alert("Inserisci un numero compreso tra 1 e " + difficulty);
        } else {
            flag = true;
        }
    }
    if (!isInArray(arrayUser, userNumber)) {
        if (!isInArray(pcArrayNumber, userNumber)) {
            arrayUser.push(userNumber);
        }
    } else {
        alert("Numero già inserito... ripetere!");
    }
}

punteggio = arrayUser.length;

/* Con un if controllo se è stato raggiunto il punteggio massimo o è stato pescato un numero perdente */
if ((!isInArray(pcArrayNumber, arrayUser[arrayUser.length])) && arrayUser.length == (difficulty - pcRandomNumber)) {
    alert("Complimenti hai fatto il punteggio massimo: " + arrayUser.length + " punti\nI numeri perdenti erano " + pcArrayNumber);
} else {
    alert("La partita è terminata ed hai fatto " + punteggio + " punti.\nPurtroppo il numero " + userNumber + " era un numero perdente\nI numeri perdenti erano " + pcArrayNumber);
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
