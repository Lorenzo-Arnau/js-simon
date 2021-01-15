$(document).ready(function(){

  function randomNumber(min, max) {
    var result = Math.floor(Math.random() * (max + 1 - min) + min);
    return result;
  }
  var counter = 0;
  var proofs = 5;
  var simonNumbers = [];
  var numeriCorretti = [];

  $('.button').click(function(){
    for (var i = 0; i < proofs; i++) {
      var numeroCasuale = randomNumber(1,100);
      simonNumbers.push(numeroCasuale);
    }
    $('.numbers-container').text(simonNumbers);
    setTimeout(function() {
      $('.numbers-container').text('? ? ? ? ?');
      $('.countdown').show();
    },10000);


    var timerNum = 40;

    $('.countdown').text(timerNum);

    var countdown = setInterval(function() {
      timerNum--;
      $('.countdown').text(timerNum);
      if(timerNum === 0) {
        clearInterval(countdown)
        $('.countdown').hide();
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
            $('.results').text('Che memoria li ha presi tutti e ' + counter + '! E sono: ' + numeriCorretti);
          }else if(counter === 1){
            $('.results').text('Ne hai azzeccato solo ' + counter + '! Ed è: ' + numeriCorretti);
          }else {
            $('.results').text('Ne hai azzeccati ' + counter + '! E sono: ' + numeriCorretti);
          }
        }, 500);
      }
    }, 1000)
  });
});
