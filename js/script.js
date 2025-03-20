// Es 1 mail
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