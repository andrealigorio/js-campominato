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
var pcArrayNumber = [randomNumber(1, difficulty)]; //Inizializzo un array con il primo numero random
var userNumber; 
var arrayUser = [];
var punteggio;
var i = 1;

while (i < pcRandomNumber) {
    pcArrayNumber.push(randomNumber(1, difficulty));           //Aggiungo secondo numero all'array
    for (j = pcArrayNumber.length - 1; j > 0; j--) {             //Con un ciclo for inverso controllo che l'ultimo numero generato non sia uguale ai precedenti
    if (pcArrayNumber[(pcArrayNumber.length-1)] == pcArrayNumber[j-1]) {
        pcArrayNumber.pop();                        //In caso viene generato un numero uguale lo elimino
        i--;                          //Eliminando un numero dell'array devo ridurre l'indice di un'unità per garantire sempre i 16 numeri totali
    }      
}
i++;
}

console.log(pcArrayNumber);

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
arrayUser.push(userNumber);

while ((!inArray(pcArrayNumber, userNumber)) || ((arrayUser.length - 1) == (difficulty - pcRandomNumber))) {
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
    arrayUser.push(userNumber);
    for (j = arrayUser.length - 1; j > 0; j--) {
        if(arrayUser[(arrayUser.length-1)] == arrayUser[j-1]) {
            alert("Numero già inserito... ripetere!");
            arrayUser.pop();
        }
    }
}

punteggio = arrayUser.length - 1;       //-1 perchè nell'array dell'utente salvo in ultima posizione il numero perdente
alert("La partita è terminata ed hai fatto " + punteggio + " punti.\nPurtroppo il numero " + arrayUser[punteggio] + " era un numero perdente\nI numeri perdenti erano " + pcArrayNumber);

console.log(arrayUser);
console.log(punteggio);

function inArray(array, number) {
    for (i = 0; i < array.length; i++) {
        if (array[i] == number) {
            return true;
        }
    }
    return false;
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
