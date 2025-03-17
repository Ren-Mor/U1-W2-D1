/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/
let Renato = "1"; //Renato è una stringa (string), ossia una sequenza di caratteri. Vale anche per le cifre!
console.log(typeof Renato);
Renato = 1;
console.log(typeof Renato); //Renato è un numero (number). Questo è un tipo di dato numerico che può essere intero o decimale.
Renato = true; //(Renato è un boolean). Un tipo di dato booleano e può essere solo "true" o "false"
console.log(typeof Renato);
Renato = undefined; //Renato è undefined (cancellazione involontaria). Segnala un errore quando qualcosa non è stato ben definito in una variabile a cui ho assegnato un valore.
console.log(typeof Renato);
Renato = null; //Renato è null (cancellazione volontaria, ma JS è scemo e uscirà object nella console). Variabili che ho dichiarato ma a cui non ho ancora assegnato un valore.
console.log(typeof Renato);

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let myName = "Renato";
console.log(typeof myName);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let num1 = 12;
let num2 = 20;
let sum = num1 + num2;
console.log(sum); //Expected 32

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12;
console.log(typeof x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/
myName = "Morelli";
//const myName = "Morelli"; //Uncaught SyntaxError: Identifier 'myName' has already been declared (at D1.js:52:7)

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
let y = 4;
let z = x - y;
console.log(z);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = "john";
let name2 = "John";
console.log(name1 === name2);
