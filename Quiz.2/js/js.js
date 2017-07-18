
localStorage.getItem('grade');
let grade = 0;


class Question {
  constructor(questions, mc, answer) {

    this.questions = questions;
    this.mc = mc;
		this.answer = answer;
  }
}

let css0 = new Question(
  '1. What is the correct CSS syntax for making all the &lt;span&gt; elements bold?',
  ['A- span {text-size:bold}', 'B- span {font-weight:bold}', 'C- &lt;span style="font-size:bold"&gt;'],
  ['w','c','w']);
let css1 = new Question(
  '2. How do you add a multiline comment in a CSS file?',
  ['A- /* this is a comment */', 'B- ## this is a comment', 'C- &lt;! this is a comment&gt;'],
  ['c','w','w']);
let css2 = new Question(
  '3. What property is used to change the text color of an element?',
  ['A- fontcolor:','B- textcolor:', 'C- color:'],
  ['w','w','c']);
let css3 = new Question(
  '4. What does CSS stand for?',
  ['A- Custom Style Sheets',  'B- Computer Style Sheets', 'C- Cascading Style Sheets'],
  ['w','w','c']);
let css4 = new Question(
  '5. The # symbol specifies that the selector is?',
  ['A- class',  'B- tag', 'C-  id'],
  ['w','w','c']);
let cssQuiz = [css0, css1, css2, css3, css4];

let htmlL0 = new Question(
  '1. Who is making the Web standards?',
  ['A- The World Wide Web Consortium', 'B- Google', 'C- Mozilla'],
  ['c','w','w']);
let htmlL1 = new Question(
  '2. What does HTML stand for?',
  ['A- Home Tool Markup Language', 'B- Hyperlinks and Text Markup Language', 'C- Hyper Text Markup Language'],
  ['w','w','c']);
let htmlL2 = new Question(
  '3. What is the correct HTML tag for inserting a line break?',
  ['A- &lt;lb /&gt;','B- &lt;br /&gt;', 'C- &lt;break /&gt;'],
  ['w','w','c']);
let htmlL3 = new Question(
  '4. Which of these tags are all &lt;table&gt; tags?',
  ['A- &lt;table&gt;&lt;tr&gt;&lt;td&gt;',  'B- &lt;table&gt;&lt;head&gt;&lt;tfoot&gt;', 'C- &lt;thead&gt;&lt;body&gt;&lt;tr&gt;'],
  ['c','w','w']);
let htmlL4 = new Question(
  '5. How can you make a list that lists the items with numbers?',
  ['A- &lt;list&gt;',  'B- &lt;ol&gt;', 'C-  &lt;ol&gt;'],
  ['w','c','w']);
let htmlQuiz = [htmlL0, htmlL1, htmlL2, htmlL3, htmlL4];

let java0 = new Question(
  '1. What is the correct JavaScript syntax to change the content of this HTML element? &lt;p id="demo"&gt;This is a demonstration.&lt;/p&gt;',
  ['A- document.getElementById("demo").innerHTML = "Hello World!";', 'B- document.getElementByName("p").innerHTML = "Hello World!";', 'C- #demo.innerHTML = "Hello World!";'],
  ['c','w','w']);
let java1 = new Question(
  '2. Inside which HTML element do we put the JavaScript?',
  ['A- &lt;script&gt;', 'B- &lt;scripting&gt;', 'C- &lt;javascript&gt;'],
  ['c','w','w']);
let java2 = new Question(
  '3. Where is the correct place to insert a JavaScript?',
  ['A- The &lt;head&gt; section','B- The &lt;body&gt; section', 'C- Both the &lt;head&gt; section & the &lt;body&gt; section are correct'],
  ['w','w','c']);
let java3 = new Question(
  '4. Which of these tags are all &lt;table&gt; tags?',
  ['A- &lt;table&gt;&lt;tr&gt;&lt;td&gt;',  'B- &lt;table&gt;&lt;head&gt;&lt;tfoot&gt;', 'C- &lt;thead&gt;&lt;body&gt;&lt;tr&gt;'],
  ['c','w','w']);
let java4 = new Question(
  '5. How can you make a list that lists the items with numbers?',
  ['A- &lt;list&gt;',  'B- &lt;ol&gt;', 'C-  &lt;ol&gt;'],
  ['w','c','w']);
let javaQuiz = [java0, java1, java2, java3, java4];
let answer = [];
let loopQ;
let loopMC;
let loopA;
let correct = $("")
function ifCorrect(){

       if($('.btn-primary').attr('data') == 'c'){
         $(".correct").html(grade += 1);
         alert('Correct!');
       } else if  ($('.btn-primary').attr('data') == 'w'){
         $(".correct").html(grade -= 1);
         alert('Incorrect!');


   }
}
function quizLoop1(){
    $(".quiz").html("");
   for(let i = 0; i < cssQuiz.length; i++){
     loopQ = cssQuiz[i].questions;

     $(".quiz").append(`<p>${loopQ}</p>`);
     for (let x = 0; x < cssQuiz[i].mc.length; x++ ){
       loopMC = cssQuiz[i].mc[x];
       loopA = cssQuiz[i].answer[x];
         $(".quiz").append(`<button onclick="ifCorrect()" data="${loopA}"  class="btn-primary">${loopMC}</button>`);
       }
       $(".quiz").append(`<hr>`);
    }
 }

$(".css").on("click",function(){
  $(".css").css("background-color", "rgba(0,0,0,.1)");
  $(".html,.java").css("background-color", "rgba(255,0,0,.7)");
  quizLoop1();
});

function quizLoop2(){
    $(".quiz").html("");
   for(let i = 0; i < htmlQuiz.length; i++){
     loopQ = htmlQuiz[i].questions;

     $(".quiz").append(`<p>${loopQ}</p>`);
     for (let x = 0; x < htmlQuiz[i].mc.length; x++ ){
       loopMC = htmlQuiz[i].mc[x];
       loopA = htmlQuiz[i].answer[x];
         $(".quiz").append(`<button onclick="ifCorrect()" data="${loopA}"  class="btn-primary">${loopMC}</button>`);
       }
       $(".quiz").append(`<hr>`);
    }
 }

$(".html").on("click",function(){
  $(".html").css("background-color", "rgba(0,0,0,.1)");
  $(".css,.java").css("background-color", "rgba(255,0,0,.7)");
  quizLoop2();
});

function quizLoop3(){
    $(".quiz").html("");
   for(let i = 0; i < javaQuiz.length; i++){
     loopQ = javaQuiz[i].questions;

     $(".quiz").append(`<p>${loopQ}</p>`);
     for (let x = 0; x < javaQuiz[i].mc.length; x++ ){
       loopMC = javaQuiz[i].mc[x];
       loopA = javaQuiz[i].answer[x];
         $(".quiz").append(`<button onclick="ifCorrect()" data="${loopA}"  class="btn-primary">${loopMC}</button>`);
       }
       $(".quiz").append(`<hr>`);
    }
 }

$(".java").on("click",function(){
  $(".java").css("background-color", "rgba(0,0,0,.1)");
  $(".css,.html").css("background-color", "rgba(255,0,0,.7)");
  quizLoop3();

});
function more(){
  $(".more").append(`
    <div class="well" style="margin-top:2em;">
      <p>
        <span class="block-inline">
          <p>Question: </p>
          <input data="moreQ" class="btn-block newQ">
        </span>
      </p>
      <p>
        <span class="block-inline">
          <p>Answers, please click the radio button if correct: </p>
          <div class="answer correct col-xs-4">
            <p><input class="moreA1"></p>
            <p><input type="radio" class="newR1"></p>
          </div>
          <div class="answer correct col-xs-4">
            <p><input class="moreA2"></p>
            <p><input type="radio" class="newR2"></p>
          </div>
          <div class="answer correct col-xs-4">
            <p><input class="moreA3"></p>
            <p><input type="radio" class="newR3"></p>
          </div>
        </span>
      </p>
      <button class="btn btn-block" onclick="newQBtn()">Submit</button>
    </div>`)

}

function newQBtn(){
    let newQArr = [];

    let newQ = $(".newQ").val();
    let moreA1 = $(".moreA1").html();
    let moreA2 = $(".moreA2").html();
    let moreA3 = $(".moreA3").html();
    let newR1 = $(".newR1").html();
    let newR2 = $(".newR2").html();
    let newR3 = $(".newR3").html();

  /*for (i = 0; i < newQArr.length; i++) {*/
    let extraQ = new Question(
      newQ,
      [moreA1,moreA2,moreA3],
      [newR1,newR2,newR3]);
      newQArr.push(extraQ);
      console.log(newQArr);

  //}
}

function ifEmpty(x){
  if ( x == !null){

  } else {
    alert("Plesae fill in all fields");
  }
}
if(!localStorage.getItem('grade')) {
    localStorage.setItem('grade', $(".correct").html());
}
