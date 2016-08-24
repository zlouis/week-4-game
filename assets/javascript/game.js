$(document).ready(function () {

      var numberToGuess= "";
       for (var i=0; i<2; i++){
             var random = Math.floor(Math.random() * 9) + 1
      numberToGuess=random+numberToGuess
    }
      

      var counter= 0;


      $('#number').text(numberToGuess);

  
          $('.blueberries').on('click', function() {
            counter= counter + 10;

            $('#yourNumber').text(counter);
            
            if (counter == numberToGuess) {
              alert('Nice, the bear is fed just right! Time to go into hibernation. Lets find another bear to feed!');

            }else if (counter > numberToGuess) {
              alert('The bear died from obesity. Find another bear to feed');
            }
            });


           $('.huckleberries').on('click', function() {
            counter= counter + 5;

            $('#yourNumber').text(counter);
            
            if (counter == numberToGuess) {
              alert('Nice, the bear is fed just right! Time to go into hibernation. Lets find another bear to feed!');

            }else if (counter > numberToGuess) {
              alert('The bear died from obesity. Find another bear to feed');
            }
            });


           $('.larva').on('click', function() {
            counter= counter + 9;

            $('#yourNumber').text(counter);
            
            if (counter == numberToGuess) {
              alert('Nice, the bear is fed just right! Time to go into hibernation. Lets find another bear to feed!');

            }else if (counter > numberToGuess) {
              alert('The bear died from obesity. Find another bear to feed');
            }
            });


           $('.salmon').on('click', function() {
            counter= counter + 21;

            $('#yourNumber').text(counter);
            
            if (counter == numberToGuess) {
              
              alert('Nice, the bear is fed just right! Time to go into hibernation. Lets find another bear to feed!');
              reset();
              

            }else if (counter > numberToGuess) {
              
              alert('The bear died from obesity. Find another bear to feed');
              reset();

              

            }
            });


function reset () {

  var numberToGuess= "";
       for (var i=0; i<2; i++){
             var random = Math.floor(Math.random() * 9) + 1
      numberToGuess=random+numberToGuess

    }
    var counter= 0;
}






        });




