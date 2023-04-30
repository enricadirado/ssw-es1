// Import stylesheets
import './style.css';

// Write Javascript code!

/*
verificare che titolo e autore contengano una certa sequenza di caratteri
- concatenare titolo e autore
- convertire maiusc in minus
- verificare presenza stringa
titolo, autore, stringa: in 3 variabili

var check = titolo.concat(autore).toLowerCase();
result.innerHTML = checkString(titolo, autore, stringa);
function checkString(a, b, c) {
  var check = a.concat(b).toLowerCase().search(c);
  return check;
}
*/

var titoloE = document.getElementById('titolo');
var autoreE = document.getElementById('autore');
var stringaE = document.getElementById('stringa');
var resultE = document.getElementById('result');

var titolo = 'La Divina Commedia';
var autore = 'Dante Alighieri';
var stringa = 'div';
titoloE.innerHTML = 'Titolo: ' + titolo;
autoreE.innerHTML = 'Autore: ' + autore;
stringaE.innerHTML = 'Stringa: ' + stringa;

resultE.innerHTML= titolo.concat(autore).toLocaleLowerCase().match(stringa);