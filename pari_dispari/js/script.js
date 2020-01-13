// Gioco Pari e dispari:
// L’utente sceglie pari o dispari e un numero da 1 a 5.
// Generiamo un numero random (sempre da 1
// a 5) per il computer.
// Sommiamo i due numeri e dichiariamo chi ha
// vinto (controlliamo se la somma da pari o dispari).

// 1.L’utente sceglie pari o dispari e un numero da 1 a 5.
var evenOdd = prompt('Scegli pari o dispari');
console.log('Hai scelto :' + ' ' + evenOdd);
var number = parseInt(prompt('Scegli un numero da 1 a 5'));
console.log('Il numero inserito :' + ' ' + number);

// 2.Generiamo un numero random (sempre da 1 a 5) per il computer.
var pcNumber = Math.floor(Math.random() * 5) + 1;
// console.log(pcNumber);

// 3.Sommiamo i due numeri e dichiariamo chi ha vinto
var sum = number + pcNumber;
console.log('La somma :' + ' ' + sum);

var result;

if (sum % 2 == 0 ) {
  result = 'Hai vinto';
}else{
  result = 'Hai perso, ritenta';
}

console.log(result);
