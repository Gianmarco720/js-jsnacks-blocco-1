/* 
Snack 3
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti
*/

// chiedo all'utente i numeri da inserire con un ciclo for
/* let somma = 0;
for (let i = 1; i <= 10; i++) {
    const userNum = Number(prompt(`Inserisci il ${i} numero:`));
    // calcolo la somma di tutti i numeri inseriti
     somma = somma + userNum;
}
// stampo la somma in console
console.log('La somma è:', somma); */

// chiedo all' utente i numeri da inserire ma con un ciclo while
let somma = 0;
let i = 0;

while (i < 10) {
    i++
    const userNum = Number(prompt(`Inserisci un numero:`));
    somma = somma + userNum;
}

console.log(somma);