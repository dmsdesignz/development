let myLoops = 30;

let keyUp = $('.input').keyup(function() {
    myLoops = Number($(this).val());
    parseInt(myLoops,0);
    loop();
});

function loop(keyUp){
  $('.seq').html('');
   let a = 0,
   b = 1,
   c;

   for(let i = 0; i < myLoops; i++){

      c = a + b;
      console.log(c);
      $(".seq").append(c + ", ").fadeIn();
      a = b;
      b = c;

   }
}
loop();
