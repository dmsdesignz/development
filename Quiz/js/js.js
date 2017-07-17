let grade = "1";
class Question {
  constructor(questions, mc, answer) {

    this.questions = questions;
    this.mc = mc;
		this.answer = answer;
  }
}

let htmlL0 = new Question('1. Who is making the Web standards?','A- The World Wide Web Consortium B- Google C-Mozilla', 'A');
let htmlL1 = new Question('2. What does HTML stand for?','A- Home Tool Markup Language B- Hyperlinks and Text Markup Language C- Hyper Text Markup Language', 'C');
let htmlL2 = new Question('3. What is the correct HTML tag for inserting a line break?','A- <lb />  B- <br /> C- <break />', 'C');
let htmlL3 = new Question('4. Which of these tags are all <table> tags?','A- <table><tr><tt> B- <table><head><tfoot> C- <thead><body><tr>', 'D');
let htmlL4 = new Question('5. How can you make a list that lists the items with numbers?','A- <list>  B- <ol> C-  <ul>', 'B');
let htmlQuiz = [htmlL0, htmlL1, htmlL2, htmlL3, htmlL4];
let loopQ;
let loopMC;
let loopA;
function ifCorrect(){
  answer = prompt(`${loopQ}
                    ${loopMC}`);
   if(answer == loopA){
     $(".correct").html(grade++);
     alert('Correct!');
   } else {
     alert('Incorrect!');
   }
}
function quizLoop(){
   for(let i = 0; i < htmlQuiz.length; i++){
     loopQ = htmlQuiz[i].questions;
     loopMC = htmlQuiz[i].mc;
     loopA = htmlQuiz[i].answer
     $(".jumbotron").append(
      `<div>${loopQ}
       ${loopMC}</div>`);
    //  ifCorrect();
   }
 }

$(".html").on("click",function(htmlQuiz){
  quizLoop(htmlQuiz);
});

console.log(htmlQuiz);
