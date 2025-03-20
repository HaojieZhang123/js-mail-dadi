// Es 1 mail
console.log('Mail');
const mail = [
    'MarioRossi@gmail.com',
    'GiuseppeVerdi@yahoo.com',
    'FrancescaBianchi@hotmail.com',
    'AndreaNeri@aol.com',
];
const userMail = prompt('Inserisci la tua mail');
let found = false;
// ciclo for per controllare se la mail inserita è presente nell'array
for (let i = 0; i < mail.length; i++) {
    if (userMail === mail[i]) {
        found = true;
    }
}
// stampa del risultato
if (found) {
    console.log('La tua mail è presente');
} else {
    console.log('La tua mail non è presente');
}



// Es 2 dadi
console.log('Dadi');
// generazione numeri random
let userNumber = Math.floor(Math.random() * 6) + 1;
let computerNumber = Math.floor(Math.random() * 6) + 1;
// stampa dei numeri generati
console.log('Il tuo numero è: ' + userNumber);
console.log('Il numero del computer é: ' + computerNumber);
// confronto dei numeri generati
if (userNumber > computerNumber) {
    console.log('Hai vinto!');
} else if (userNumber < computerNumber) {
    console.log('Hai perso!');
} else {
    console.log('Pareggio!');
}