$(document).ready(function(){

  function randomNumber(min, max) {
    var result = Math.floor(Math.random() * (max + 1 - min) + min);
    return result;
  }
  var counter = 0;
  var proofs = 5;
  var simonNumbers = [];
  var numeriCorretti = [];
  for (var i = 0; i < proofs; i++) {
    var numeroCasuale = randomNumber(1,100);
    simonNumbers.push(numeroCasuale);
  }

  alert(simonNumbers);

  alert('adesso hai 30 secondi in cui devi memorizzare i numeri di prima prima di riscriverli')
   setTimeout(function() {
      for (var i = 0; i < simonNumbers.length; i++) {
      var numeroUtente = parseInt(prompt('Vai inserisci i numeri'));
      if (numeroUtente === simonNumbers[i]) {
        numeriCorretti.push(numeroUtente);
        console.log(numeriCorretti);
        counter ++;
      }
    }
    if (counter === proofs) {
      alert('Che memoria li ha presi tutti e ' + counter + '! E sono: ' + numeriCorretti);
    }else{
      alert('ne hai azzeccati ' + counter + '! E sono: ' + numeriCorretti);
    }
  }, 30000);

})
