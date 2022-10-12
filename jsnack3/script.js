/* 
Snack 3
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti
*/

// chiedo all'utente i numeri da inserire
let somma = 0;
for (let i = 1; i <= 10; i++) {
    const userNum = Number(prompt(`Inserisci il ${i} numero:`));
     somma = somma + userNum;
}

console.log('La somma è', somma);