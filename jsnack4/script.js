/*
Snack 4 Blocco 1:
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
chiedi all’utente il suo nome e
comunicagli se può partecipare o no alla festa.
*/

// array con lista degli invitati
const guests = [
    'Marco',
    'Fabio',
    'Luigi',
    'Alberto',
    'Enrica',
    'Roberta'
];
console.log(guests);
// chiedo all'invitato il suo nome
const userName = prompt('Qual è il tuo nome?');

let checker = false;
let i = 0;

while (i < guests.length) {
    const thisGuest = guests[i];
    if (userName === thisGuest) {
        checker = true;
    }
    i++;
}

if(checker) {
    console.log('Puoi entrare');
} else {
    console.log('Non puoi Entrare');
}