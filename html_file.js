// Dynamic Quiz App with randomly chosen multiple choice questions
// Design and development by Micke Berg

// applying sound effects here
const match = new Audio('sound.mp3');
const complete = new Audio('sound1.mp3');

const main = document.querySelector('main');
const theQuestion = document.querySelector('.the-question');
const optionsFieldContainer = document.querySelector('.options-field');
const optionField = document.querySelector('.options-field').children;
const answerTrackerContainer = document.querySelector('.answers-tracker');
const questionsOfTotal = document.querySelector('.question-of-total');
const totalQuestionSpan = document.querySelector('.total-question');
const totalQuestionSpan2 = document.querySelector('.total-question2');
const makeChoice = document.querySelector('.make-choice');
const correctAnswerSpan = document.querySelector('.correct-answers');
const percentage = document.querySelector('.percentage');
const gameOver = document.querySelector('.game-over');
const option = document.querySelector('.option');
const explanationElement = document.querySelector('.explanation');
const allQuestionsArr = [
 {
 q: "HTML stands for_______.",
 options: ["Hyperactive Text Markup Language", "Hyper Text Markup Language", "Hyper Text Machine Language", "None of these"],
 answer: 1,
 explanation: "HTML stands for 'Hyper Text Markup Language'.",
 },
 {
 q: "Which input type reset defines a reset button that will reset all form values to their default values?",
 options: ["clear", "clear:both", "reset", "refresh"],
 answer: 2,
 explanation: "The reset input type reset defines a reset button that will reset all form values to their default values. Here is the syntax, <input type=\"reset\">"
},
 {
 q: "Can we hide content using the comment?",
 options: ["Yes", "No", "-", "-"],
 answer: 0,
 explanation: "Yes, comments can be used to hide content. Syntax example: <!-- <p>Hello, world!</p> -->",
 },
 {
 q: "Can we hide inline content using the comment?",
 options: ["Yes", "No", "-", "-"],
 answer: 0,
 explanation: "Yes, comments can be used to hide inline content. Syntax example: <p>Hello, world! <!-- This is some text --> How are you?</p>",
 },
 {
 q: "Which attribute is used to specify a unique id for an HTML element?",
 options: ["style", "css", "id", "class"],
 answer: 2,
 explanation: "The HTML id attribute is used to specify a unique id for an HTML element."
},
{
 q: "Which attribute is often used to point to a class name in a style sheet?",
 options: ["style", "css", "src", "class"],
 answer: 3,
 explanation: "The class attribute is often used to point to a class name in a style sheet."
},
{
 q: "Which attribute specifies the path to the image?",
 options: ["href", "link", "src", "All of the above"],
 answer: 2,
 explanation: "The src attribute specifies the path to the image."
},
{
 q: "Which attribute specifies an alternate text for the image?",
 options: ["alt", "alternate", "alttext", "All of the above"],
 answer: 0,
 explanation: "The alt attribute specifies an alternate text for the image."
},
{
 q: "Which attribute specifies where to open the linked document?",
 options: ["href", "link", "src", "target"],
 answer: 3,
 explanation: "The target attribute specifies where to open the linked document."
},
 {
 q: "HTML tags with no content are called _____.",
 options: ["Special tags", "Advanced tags", "Empty tags", "Other tags"],
 answer: 2,
 explanation: "HTML tags with no content are called empty tags. For example, the br tag, hr tag.",
 },
 {
 q: "Nested HTML Elements are allowed in HTML?",
 options: ["Yes", "No", "-", "-"],
 answer: 0,
 explanation: "Yes, Nested HTML Elements (<p><b><u>Some text</u></b></p>) are allowed in HTML.",
 },
 {
 q: "Is HTML a case sensitive?",
 options: ["Yes", "No", "-", "-"],
 answer: 1,
 explanation: "No, HTML is Not Case Sensitive.",
 },
 {
 q: "Why 'href' attribute is used with <a> tag?",
 options: ["To define title text", "To define reference of a document", "To define destination URL", "All of the above"],
 answer: 2,
 explanation: "The href attribute of the <a> tag is most important, which indicates the link's destination."
},
{
 q: "Who invented HTML?",
 options: ["Dave Raggett", "Tim Berners-Lee", "Denis Ritchie", "All of the above"],
 answer: 1,
 explanation: "Tim Berners-Lee invented HTML in 1991."
},
{
 q: "HTML tags with no content are called _____.",
 options: ["Special tags", "Advanced tags", "Empty tags", "Other tags"],
 answer: 2,
 explanation: "HTML tags with no content are called empty tags. For example, the <br> tag, <hr> tag."
},
{
 q: "Who invented HTML?",
 options: ["Dave Raggett", "Tim Berners-Lee", "Denis Ritchie", "All of the above"],
 answer: 1,
 explanation: "Tim Berners-Lee invented HTML in 1991."
},
{
 q: "HTML tags with no content are called _____.",
 options: ["Special tags", "Advanced tags", "Empty tags", "Other tags"],
 answer: 2,
 explanation: "HTML tags with no content are called empty tags. For example, the <br> tag, <hr> tag."
},
 {
 q: "Which attribute specifies an alternate text for the image?",
 options: ["alt", "alternate", "alttext", "All of the above"],
 answer: 0,
 explanation: "The alt attribute specifies an alternate text for the image."
}
];

// Arrays for Easy and Hard questions
const easyQuestionsArr = [
{
 q: "HTML stands for_______.",
 options: ["Hyperactive Text Markup Language", "Hyper Text Markup Language", "Hyper Text Machine Language", "None of these"],
 answer: 1,
 explanation: "HTML stands for 'Hyper Text Markup Language'.",
},
{
 q: "Which is the correct syntax to include comment in an HTML document?",
 options: ["//", "/* Comment */", "// Comment //", "<!-- Comment -->"],
 answer: 3,
 explanation: "You can add comments to your HTML source by using the syntax: <!-- Write your comments here -->",
},
{
 q: "Can we hide content using the comment?",
 options: ["Yes", "No", "-", "-"],
 answer: 0,
 explanation: "Yes, comments can be used to hide content. Syntax example: <!-- <p>Hello, world!</p> -->",
},
{
 q: "Can we hide inline content using the comment?",
 options: ["Yes", "No", "-", "-"],
 answer: 0,
 explanation: "Yes, comments can be used to hide inline content. Syntax example: <p>Hello, world! <!-- This is some text --> How are you?</p>",
},
{
 q: "Which element/tag defines a paragraph?",
 options: ["<p>", "<pre>", "<panel>", "None of the above"],
 answer: 0,
 explanation: "The <p> tag defines a paragraph.",
},
{
 q: "Which tag/element defines the HTML document's body?",
 options: ["<HTML>", "<HTMLbody>", "<bdy>", "<body>"],
 answer: 3,
 explanation: "The <body> element defines the HTML document's body.",
},
{
 q: "Which tag contains the meta information about the HTML page?",
 options: ["<html>", "<title>", "<head>", "<body>"],
 answer: 2,
 explanation: "The <head> tag contains the meta information about the HTML page.",
},
{
 q: "Which tag is the root element of an HTML page?",
 options: ["<html>", "<title>", "<head>", "<body>"],
 answer: 0,
 explanation: "The <html> tag is the root element of an HTML page.",
},
{
 q: "Who invented HTML?",
 options: ["Dave Raggett", "Tim Berners-Lee", "Denis Ritchie", "All of the above"],
 answer: 1,
 explanation: "Tim Berners-Lee invented HTML in 1991.",
},
{
 q: "HTML tags with no content are called _____.",
 options: ["Special tags", "Advanced tags", "Empty tags", "Other tags"],
 answer: 2,
 explanation: "HTML tags with no content are called empty tags. For example, the <br> tag, <hr> tag.",
},
{
 q: "Nested HTML Elements are allowed in HTML?",
 options: ["Yes", "No", "-", "-"],
 answer: 0,
 explanation: "Yes, Nested HTML Elements (<p><b><u>Some text</u></b></p>) are allowed in HTML.",
},
{
 q: "Is HTML a case sensitive?",
 options: ["Yes", "No", "-", "-"],
 answer: 1,
 explanation: "No, HTML is Not Case Sensitive.",
},
{
 q: "HTML headings are defined with the _____ tags.",
 options: ["<head1> to <head6>", "<p1> to <p6>", "<h1> to <h6>", "<h1> to <h3>"],
 answer: 2,
 explanation: "HTML headings are defined with the <h1> to <h6> tags.",
},
{
 q: "Which tag is used to display a horizontal rule (horizontal line)?",
 options: ["<br>", "<hr>", "<hr>...</hr>", "<line>"],
 answer: 1,
 explanation: "The <hr> tag is used to display a horizontal rule.",
},
{
 q: "What is the correct syntax of <hr> tag?",
 options: ["<hr>", "<hr />", "<hr></hr>", "All of the above"],
 answer: 0,
 explanation: "Both <hr> and <hr /> can be used to display a horizontal line.",
}
];

const hardQuestionsArr = [
{
 q: "Which tag is used to define a line break?",
 options: ["<\\n>", "<lr>", "<br>", "<br>...</br>"],
 answer: 2,
 explanation: "The <br> tag is used to define a line break.",
},
{
 q: "What is the correct syntax of <br> tag?",
 options: ["<br>", "<br />", "<br></br>", "All of the above"],
 answer: 0,
 explanation: "Both <br> and <br /> can be used to display a line break.",
},
{
 q: "Which tag is used to define preformatted text?",
 options: ["<pf>", "<p>", "<pre>", "<code>"],
 answer: 2,
 explanation: "The <pre> tag is used to define preformatted text.",
},
{
 q: "Which HTML attribute is used to define styles of an element?",
 options: ["<style>", "<css>", "style", "css"],
 answer: 2,
 explanation: "The style attribute is used to define the styles of an element.",
},
{
 q: "Which is the correct HTML statement to define the red color of the paragraph text?",
 options: ['<p style="color: #ff0000;">', '<p style="color: red;">', "Both A. and B.", "None of the above"],
 answer: 2,
 explanation: 'The correct HTML statement to define red paragraph color is: <p style="color: #ff0000;"> or <p style="color: red;">.',
},
{
 q: "Which HTML tag is used to define bold text, without any extra importance?",
 options: ["<strong>", "<bold>", "<bolder>", "<b>"],
 answer: 3,
 explanation: "The HTML <b> tag is used to define bold text, without any extra importance.",
},
{
 q: "Which HTML tag is used to define text with strong importance?",
 options: ["<strong>", "<bold>", "<bolder>", "<b>"],
 answer: 0,
 explanation: "The HTML tag <strong> is used to define text with strong importance.",
},
{
 q: "Which HTML tag is used to define italic text?",
 options: ["<italic>", "<em>", "<i>", "<it>"],
 answer: 2,
 explanation: "The HTML tag <i> is used to define italic text.",
},
{
 q: "Which HTML tag is used to define emphasized text?",
 options: ["<italic>", "<em>", "<i>", "<it>"],
 answer: 1,
 explanation: "The HTML tag <em> is used to define emphasized text.",
},
{
 q: "Which HTML tag is used to define smaller text?",
 options: ["<normal>", "<span>", "<smaller>", "<small>"],
 answer: 3,
 explanation: "The HTML tag <small> is used to define smaller text.",
},
{
 q: "Which HTML tag is used to define marked or highlighted text?",
 options: ["<mark>", "<highlight>", "<m>", "<highlighted>"],
 answer: 0,
 explanation: "The HTML tag <mark> is used to define marked or highlighted text.",
},
{
 q: "Which HTML tag is used to define strike a line through deleted text?",
 options: ["<delete>", "<del>", "<deleted>", "<through>"],
 answer: 1,
 explanation: "The HTML tag <del> is used to define strike a line through deleted text.",
},
{
 q: "Which HTML tag is used to define underline inserted text?",
 options: ["<underline>", "<text-decoration>", "<u>", "Both C and D"],
 answer: 3,
 explanation: "The HTML tags <ins> and <u> are used to define underline inserted text.",
},
{
 q: "Which HTML tag is used to define subscript text?",
 options: ["<sub>", "<subscript>", "<s>", "<subscripted>"],
 answer: 0,
 explanation: "The HTML <sub> tag is used to define subscript text.",
},
{
 q: "Which HTML tag is used to define superscript text?",
 options: ["<sup>", "<superscript>", "<s>", "<superscripted>"],
 answer: 0,
 explanation: "The HTML <sup> tag is used to define superscript text.",
},
{
 q: "Which is the correct HTML statement to display H<sub>2</sub>O in a paragraph?",
 options: ["<p>H<sup>2</sup>O</p>", "<p>H<ins>2</ins>O</p>", "<p>H<below>2</below>O</p>", "<p>H<sub>2</sub>O</p>"],
 answer: 3,
 explanation: "The correct HTML statement to display H2O in a paragraph is: <p>H<sub>2</sub>O</p>",
},
{
 q: "Which is the correct HTML statement to display HelloWorld in a paragraph?",
 options: ["<p>Hello<sup>World</sup></p>", "<p>Hello<top>World</top></p>", "<p>Hello<sub>World</sub></p>", "<p>Hello<above>World</above></p>"],
 answer: 0,
 explanation: "The correct HTML statement to display HelloWorld in a paragraph is: <p>Hello<sup>World</sup></p>",
},
{
 q: "Which is the correct HTML statement to display HelloHi! in a paragraph?",
 options: ["<p><del>Hello</del><ins>Hi!</ins></p>", "<p><strike>Hello</strike><ins>Hi!</ins></p>", "<p><cut>Hello</cut><ins>Hi!</ins></p>", "All of the above"],
 answer: 0,
 explanation: "The correct HTML statement to display HelloHi! in a paragraph is/are: <p><del>Hello</del><ins>Hi!</ins></p> and <p><strike>Hello</strike><ins>Hi!</ins></p>",
}
];


function showExplanation(explanation) {
 const explanationElement = document.querySelector('.explanation');
 explanationElement.innerHTML = explanation;
 explanationElement.style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function() {
 const modal = document.getElementById('difficulty-modal');
 const quizContainer = document.getElementById('quiz-container');

 // Function to show quiz after difficulty is selected
 function startQuiz(mode) {
 modal.style.display = 'none';
 quizContainer.style.display = 'block';
 selectMode(mode);
 }

 // Attach event listeners to difficulty buttons
 document.getElementById('easy-mode').addEventListener('click', function() {
 startQuiz('easy');
 });

 document.getElementById('hard-mode').addEventListener('click', function() {
 startQuiz('hard');
 });
 
 // Ensure to start with the modal visible
 modal.style.display = 'flex';
});


let selectedQuestionsArr = []; // Array to hold selected mode's questions

// Function to load selected mode's questions
function selectMode(mode) {
 if (mode === 'easy') {
 selectedQuestionsArr = [...easyQuestionsArr];
 } else if (mode === 'hard') {
 selectedQuestionsArr = [...hardQuestionsArr];
 }
 selectQuestions();
 load();
}

// Modify the selectQuestions function to use selectedQuestionsArr
function selectQuestions() {
 if (selectedQuestionsArr.length < 10) {
 selectedQuestionsArr = [...(selectedQuestionsArr === easyQuestionsArr ? easyQuestionsArr : hardQuestionsArr)];
 }

 theRandomQuestions = [];

 for (let i = 0; i < 10; i++) {
 let randomQuestion = Math.floor(Math.random() * selectedQuestionsArr.length);

 theRandomQuestions.push(selectedQuestionsArr[randomQuestion]);
 selectedQuestionsArr.splice(randomQuestion, 1);
 }
}

// Example mode selection call on button click
document.getElementById('easy-mode').addEventListener('click', () => selectMode('easy'));
document.getElementById('hard-mode').addEventListener('click', () => selectMode('hard'));

// Ensure to call selectMode at the start to load default questions
window.onload = function () {
 selectMode('easy'); // Load easy questions by default
};


let questionIndex = 0;
let index = 0;
let myArray = [];
let myArr = [];
let score = 0;

let allQuestions = [...allQuestionsArr];
let theRandomQuestions = [];

function selectQuestions() {
 if (allQuestions.length < 10) {
 allQuestions = [...allQuestionsArr];
 };
 
 theRandomQuestions = [];

 for (let i = 0; i < 10; i++) {
 let randomQuestion = Math.floor(Math.random() * allQuestions.length);

 theRandomQuestions.push(allQuestions[randomQuestion]);
 allQuestions.splice(randomQuestion, 1);
 };
};

function load() {
 questionsOfTotal.innerHTML = index+1;
 optionsFieldContainer.innerHTML = '';
 theQuestion.innerHTML = theRandomQuestions[questionIndex].q;

 for(let i = 0; i < theRandomQuestions[questionIndex].options.length; i++) {
 optionsFieldContainer.innerHTML += `<div class="option">${theRandomQuestions[questionIndex].options[i]}</div>`;
 };

 const parent = optionsFieldContainer;
 const children = Array.from(parent.children);

 children.map((option, index) => {
 option.addEventListener('click', () => {
 checkIfRightAnswer(index);
 });
 });

 // Hide explanation when loading a new question
 const explanationElement = document.querySelector('.explanation');
 explanationElement.style.display = 'none';

};

function next() {
 validate();
};

function checkIfRightAnswer(index) {
 if(index == theRandomQuestions[questionIndex].answer) {
 match.play(); 
 optionField[index].classList.add('correct');
 updateAnswerTracker('correct');
 score++;
 showExplanation(theRandomQuestions[questionIndex].explanation);
 } else {
 optionField[index].classList.add('wrong');
 optionField[theRandomQuestions[questionIndex].answer].classList.add('correct');
 updateAnswerTracker('wrong');
 showExplanation(theRandomQuestions[questionIndex].explanation);
 }
 disableOptions();
 
 makeChoice.innerHTML = '';
 makeChoice.style.backgroundColor = '';
};

function disableOptions() {
 for(let i = 0; i < optionField.length; i++) {
 optionField[i].classList.add('disabled');
 }
};

function enableOptions() {
 for(let i = 0; i < optionsFieldContainer.children.length; i++) {
 optionField[i].classList.remove('disabled', 'correct', 'wrong');
 }
};

function validate() {
 if(!optionField[0].classList.contains('disabled')) {
 makeChoice.innerHTML = 'Välj ett alternativ innan du kan gå vidare.';
 makeChoice.style.backgroundColor = 'rgba(255, 255, 255, 0.415)';
 }
 else {
 if (questionIndex === 9) {
 quizOver();
 questionIndex = 0;
 } else {
 enableOptions();
 questionIndex++;
 load();
 }
 }
};

function answerTracker() {
 for(let i = 0; i < theRandomQuestions.length; i++){ 
 const div = document.createElement('div');
 answerTrackerContainer.appendChild(div);
 }
}

function updateAnswerTracker(classNam) {
 let boxes = Array.from(answerTrackerContainer.children);
 boxes[index].classList.add(classNam);
 index++;
};


window.onload = function () {
 loadRound();
};


// Total time in seconds (3 minutes)
let time = 3 * 60;

const countdownElement = document.getElementById('countdown');

function updateCountdown() {
 const minutes = Math.floor(time / 60);
 const seconds = time % 60;

 countdownElement.innerHTML = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

 if (time > 0) {
 time--;
 } else {
 clearInterval(interval);
 // Timer has ended, stop the quiz and show the results
 quizOver();
 }
}

// Update countdown every second
let interval = setInterval(updateCountdown, 1000);

function tryAgain() {
 index = 0;
 answerTrackerContainer.innerHTML = '';
 document.querySelector('.quiz-over').classList.remove('show');
 score = 0;

 // Reset the timer
 time = 3 * 60; // 3 minutes in seconds
 
 loadRound();
}

function loadRound() {
 selectQuestions();
 load();

 totalQuestionSpan.innerHTML = theRandomQuestions.length;

 answerTracker();
 index = 0;
 
 // Clear existing interval and start a new one for the countdown
 clearInterval(interval);
 interval = setInterval(updateCountdown, 1000);
}

function quizOver() {
 complete.play();
 document.querySelector('.quiz-over').classList.add('show');

 let finishScore = (score / theRandomQuestions.length) * 100;

 correctAnswerSpan.innerHTML = score;
 totalQuestionSpan2.innerHTML = theRandomQuestions.length;
 percentage.innerHTML = finishScore + '%';

 const gameOverStatements = [
 { option: 'You answered 0 out of 5 questions correctly!' },
 { option: 'Things aren’t going so well for you, huh?!! Time to do your homework!!' },
 { option: 'Hmm... it’s going okay. Maybe study a bit more!!' },
 { option: 'Totally okay, but you can probably do better!' },
 { option: 'You seem to have a pretty good grasp of this democracy stuff!!' },
 { option: 'Ooooh, you’re awesome. You’re a democracy expert!!' },
 { option: 'Test your knowledge again!!' }
 ];

 let statementIndex;
 if (finishScore === 0) {
 statementIndex = 0;
 } else if (finishScore <= 20) {
 statementIndex = 1;
 } else if (finishScore <= 40) {
 statementIndex = 2;
 } else if (finishScore <= 60) {
 statementIndex = 3;
 } else if (finishScore <= 80) {
 statementIndex = 4;
 } else if (finishScore <= 100) {
 statementIndex = 5;
 } else {
 statementIndex = 6;
 }
 
 gameOver.innerHTML = gameOverStatements[statementIndex].option;
}

window.onload = function () {
 loadRound();
};