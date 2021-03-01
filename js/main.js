const pcRandomNumber = 16;

var difficulty = 100;
var pcArrayNumber = [randomNumber(1, 100)]; //Inizializzo un array con il primo numero random
var userNumber = prompt("Inserisci un numero da 1 a " + difficulty);
var arrayUser = [];
arrayUser.push(userNumber);
var punteggio;
var i = 1;

while (i < pcRandomNumber) {
    pcArrayNumber.push(randomNumber(1, 100));           //Aggiungo secondo numero all'array
    for (j = pcArrayNumber.length - 1; j > 0; j--) {             //Con un ciclo for inverso controllo che l'ultimo numero generato non sia uguale ai precedenti
        if (pcArrayNumber[(pcArrayNumber.length-1)] == pcArrayNumber[j-1]) {
            pcArrayNumber.pop();                        //In caso viene generato un numero uguale lo elimino
            i--;                          //Eliminando un numero dell'array devo ridurre l'indice di un'unità per garantire sempre i 16 numeri totali
        }      
    }
    i++;
}

console.log(pcArrayNumber);
do {
    
}
while (isNaN(userNumber));

while ((!inArray(pcArrayNumber, userNumber)) || ((arrayUser.length - 1) == (difficulty - pcRandomNumber))) {
    userNumber = prompt("Inserisci un numero da 1 a " + difficulty);
    arrayUser.push(userNumber);
    for (j = arrayUser.length - 1; j > 0; j--) {
        if(arrayUser[(arrayUser.length-1)] == arrayUser[j-1]) {
            alert("Numero già inserito... ripetere!");
            arrayUser.pop();
        }
    }
}
punteggio = arrayUser.length - 1;
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
