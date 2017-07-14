let averageArr = [];
let average = $(".averageNumber").html(averageArr[0]);
let gradeString = $(".gradeString").html();
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
    sum += averageArr[i];
    console.log(sum);
    i++;
  }
};
$(".btnGrade").on("click", function() {
  moveNumber();
  averageNumber();
  average = sum / averageArr.length;
    console.log(averageArr.length);
});
