let averageArr = [];
<<<<<<< HEAD
let average;
let gradeString;
=======
let average = $(".averageNumber").html(averageArr[0]);
let gradeString = $(".gradeString").html();
>>>>>>> c8f98cf1423ec2e4cad8115150b226cfb17cf457
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
<<<<<<< HEAD
    sum = averageArr.reduce(function (a, b) {
      return a + b;
    }, 0);
=======
    sum += averageArr[i];
    console.log(sum);
    i++;
>>>>>>> c8f98cf1423ec2e4cad8115150b226cfb17cf457
  }
};
$(".btnGrade").on("click", function() {
  moveNumber();
  averageNumber();
<<<<<<< HEAD
  average = $(".averageNumber").html(Math.round(sum / averageArr.length));

    console.log(sum);
    console.log(averageArr.length);
    console.log(average);
=======
  average = sum / averageArr.length;
    console.log(averageArr.length);
>>>>>>> c8f98cf1423ec2e4cad8115150b226cfb17cf457
});
