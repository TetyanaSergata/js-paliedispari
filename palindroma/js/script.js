// Scrivi una funzione per capire se la parola è palindroma
var wordUser = prompt('Inserisci una parola');

var wordToCheck = wordToCompare(wordUser);

if (wordToCheck == wordUser){
  console.log("la parola scelta è palindroma");
}else{
  console.log("la parola scelta non è palindroma");
}

// Creiamo la funzione
function wordToCompare( word ){
  var wordReverse = '';
  for (var i = word.length -1; i >= 0; i--){
    wordReverse += word[i];
  }
  return wordReverse;
}
