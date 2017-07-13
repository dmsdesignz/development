let average = $(".averageNumber").html();
let gradeString = $(".gradeString").html();
let averageArr = [];
let sum = 0;
function moveNumber() {
  let gradeInput = $(".gradeInput").val();
  console.log(gradeInput);
  var gradeStringVal = "<span> " + gradeInput + "</span>";
  $(".gradeString").append(gradeStringVal);
  averageArr.push(gradeInput);
}
function averageNumber(average){
  let firstGrade = averageArr[0];
  $(".averageNumber").html() = firstGrade += sum;
  for (i = 0; i < averageArr.length; i++) {
    if (i > 0){
      averageArr[i] += sum;

      i++;
    }
  }
};
$(".btnGrade").on("click", function() {
  moveNumber();
  averageNumber();
  average = sum / averageArr.length;
});
