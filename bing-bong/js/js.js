let x = 0;
function addSpan(a){
    $(".well").append(`<span>${a} <span>`)
}
for (i = 0; x < 100; x++){

  if(x % 3){
    console.log("Bing");
    addSpan("Bing, ");
  }
  else if (x % 5) {
    console.log("Bong");
    addSpan("Bong, ");
  }
  else if (x % 3 || x % 5) {
    console.log("Bing Bong");
    addSpan("Bing Bong, ");
  }
  console.log(x);
  addSpan(x);
}
