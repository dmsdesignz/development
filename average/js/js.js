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
function averageNumber(){
  let firstGrade = averageArr[0];
  average = firstGrade += sum;
  for (i = 0; i < averageArr.length; i++) {
    if (i > 0){
      sum += averageArr[i];

      i++;
    }
  }
};
$(".btnGrade").on("click", function() {
  moveNumber();
  averageNumber(sum);
  average = sum / averageArr.length;
});
