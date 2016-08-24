$(document).ready(function () {

      var numberToGuess= "";
       for (var i=0; i<2; i++){
             var random = Math.floor(Math.random() * 9) + 1
      numberToGuess=random+numberToGuess
    }
      

      var counter= 0;


      $('#number').text(numberToGuess);

  
          $('.blueberries').on('click', function() {
            
              for (var i=0; i<2; i++){
             var random1 = Math.floor(Math.random() * 9) + 1
           }
           counter= random1 + counter;
             

            $('#yourNumber').text(counter);
            
            if (counter == numberToGuess) {
              alert('Nice, the bear is fed just right! Time to go into hibernation. Lets find another bear to feed!');

            }else if (counter > numberToGuess) {
              alert('The bear died from obesity. Find another bear to feed');
              counter=0;
            }
            });


           $('.huckleberries').on('click', function() {
             for (var i=0; i<2; i++){
             var random1 = Math.floor(Math.random() * 9) + 1
           }
           counter= random1 + counter;

            $('#yourNumber').text(counter);
            
            if (counter == numberToGuess) {
              alert('Nice, the bear is fed just right! Time to go into hibernation. Lets find another bear to feed!');

            }else if (counter > numberToGuess) {
              alert('The bear died from obesity. Find another bear to feed');
            }
            });


           $('.larva').on('click', function() {
             for (var i=0; i<2; i++){
             var random1 = Math.floor(Math.random() * 9) + 1
           }
           counter= random1 + counter;

            $('#yourNumber').text(counter);
            
            if (counter == numberToGuess) {
              alert('Nice, the bear is fed just right! Time to go into hibernation. Lets find another bear to feed!');

            }else if (counter > numberToGuess) {
              alert('The bear died from obesity. Find another bear to feed');
            }
            });


           $('.salmon').on('click', function() {
             for (var i=0; i<2; i++){
             var random1 = Math.floor(Math.random() * 9) + 1
           }
           counter= random1 + counter;

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




