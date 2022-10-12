/* 
Snack 1
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore. 
*/ 

// chiedo all' utente di inserire due numeri
const firstNum = Number(prompt('Inserisci il primo numero:'));
const secondNum = Number(prompt('Inserisci il secondo numero:'));

// stampo il risultato con un if statement
let result;
if (firstNum > secondNum) {
    result = firstNum;
    console.log(`Il numero più grande è: ${result}`);
} else if (secondNum > firstNum) {
    result = secondNum;
    console.log(`Il numero più grande è: ${result}`);
}

document.getElementById('risultato').innerHTML = `Il numero più grande è: ${result}`;