let average = $(".averageNumber").html();
let gradeInput = $(".gradeInput").val();
let gradeString = $(".gradeString").html();
let averageArr = ();
function moveNumber(gradeInput){
  toString(gradeInput);
  var gradeStringVal = "<span> " + gradeInput + " </span>";
  $(".gradeString").append(gradeStringVal);
    averageArr.push(gradeInput);
}
$(".btnGrade").on("click", function(){
  moveNumber();
});
