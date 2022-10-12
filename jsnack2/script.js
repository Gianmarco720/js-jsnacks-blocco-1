/* 
Snack 2
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.
*/

// chiedo all'utente le due parole da inserire
const firstWord = prompt('Inserisci la prima parola:');
const secondWord = prompt('Inserisci la seconda parola:');

// controllo la lunghezza delle parole con un if statement
if (firstWord.length > secondWord.length) {
    document.getElementById('second').innerHTML = `Parola più corta: ${secondWord}`;
    document.getElementById('first').innerHTML = `Parola più lunga: ${firstWord}`;
} else if (secondWord.length > firstWord.length) {
    document.getElementById('second').innerHTML = `Parola più lunga: ${secondWord}`;
    document.getElementById('first').innerHTML = `Parola più corta: ${firstWord}`;
} 