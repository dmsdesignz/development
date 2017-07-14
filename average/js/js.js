let averageArr = [];
let average;
let gradeString;
let sum = "0";

function moveNumber() {
  let gradeInput = $(".gradeInput").val();
  let gradeStringVal = `<span> ${gradeInput}</span>`;
  $(".gradeString").append(gradeStringVal);
  gradeInput = parseInt(gradeInput,10);
  averageArr.push(gradeInput);
}
function averageNumber(){
  sum = parseInt(sum,10);
  for (i = 0; i < averageArr.length; i++) {
    sum = averageArr.reduce(function (a, b) {
      return a + b;
    }, 0);
  }
};
$(".btnGrade").on("click", function() {
  moveNumber();
  averageNumber();
  average = $(".averageNumber").html(Math.round(sum / averageArr.length));

    console.log(sum);
    console.log(averageArr.length);
    console.log(average);
});
