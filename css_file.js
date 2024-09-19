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
        q: "Which CSS property is used to change the background color?",
        options: ["color", "bgcolor", "background-color", "background"],
        answer: 2,
        explanation: "The 'background-color' property is used to change the background color of an element in CSS.",
      },
      {
        q: "Which CSS property controls the text size?",
        options: ["font-size", "text-size", "font-style", "text-style"],
        answer: 0,
        explanation: "The 'font-size' property controls the size of the text in CSS.",
      },
      {
        q: "How do you add a comment in a CSS file?",
        options: ["// this is a comment", "/* this is a comment */", "<!-- this is a comment -->", "# this is a comment"],
        answer: 1,
        explanation: "Comments in CSS are added using '/* comment */' syntax.",
      },
      {
        q: "Which CSS property is used to change the text color of an element?",
        options: ["text-color", "font-color", "color", "text-style"],
        answer: 2,
        explanation: "The 'color' property is used to change the text color of an element in CSS.",
      },
      {
        q: "Which CSS property is used to change the font of an element?",
        options: ["font-style", "font-family", "font-size", "font-weight"],
        answer: 1,
        explanation: "The 'font-family' property is used to change the font of an element.",
      },
      {
        q: "Which CSS property is used to create space between the element’s border and inner content?",
        options: ["margin", "padding", "border", "spacing"],
        answer: 1,
        explanation: "The 'padding' property creates space between the element’s border and its content.",
      },
      {
        q: "Which CSS property is used to set the spacing between lines of text?",
        options: ["line-height", "letter-spacing", "text-spacing", "font-spacing"],
        answer: 0,
        explanation: "The 'line-height' property sets the spacing between lines of text.",
      },
      {
        q: "Which CSS property is used to make the text bold?",
        options: ["font-style", "font-weight", "text-transform", "text-decoration"],
        answer: 1,
        explanation: "The 'font-weight' property is used to make the text bold.",
      },
      {
        q: "How do you select an element with the id 'header' in CSS?",
        options: [".header", "#header", "header", "*header"],
        answer: 1,
        explanation: "In CSS, an element with the id 'header' is selected using '#header'.",
      },
      {
        q: "Which CSS property is used to align text to the center?",
        options: ["text-align", "align-text", "center-text", "text-center"],
        answer: 0,
        explanation: "The 'text-align' property is used to align text to the center in CSS.",
      },
      {
        q: "Which CSS property is used to add shadow to text?",
        options: ["font-shadow", "text-shadow", "shadow-text", "text-glow"],
        answer: 1,
        explanation: "The 'text-shadow' property is used to add shadow to text in CSS.",
      },
      {
        q: "Which CSS property is used to control the layout of multiple elements in a grid?",
        options: ["grid-layout", "grid-template", "grid-gap", "grid"],
        answer: 3,
        explanation: "The 'grid' property is used to control the layout of multiple elements in a grid in CSS.",
      },
      {
        q: "Which CSS property is used to set the width of an element?",
        options: ["element-width", "set-width", "width", "size-width"],
        answer: 2,
        explanation: "The 'width' property is used to set the width of an element in CSS.",
      },
      {
        q: "Which CSS property is used to add a border around an element?",
        options: ["border", "padding", "outline", "frame"],
        answer: 0,
        explanation: "The 'border' property is used to add a border around an element in CSS.",
      },
      {
        q: "Which CSS property is used to change the style of the list marker?",
        options: ["marker-style", "list-style", "list-marker", "marker"],
        answer: 1,
        explanation: "The 'list-style' property is used to change the style of the list marker.",
      },
      {
        q: "Which property is used to float an element to the left or right?",
        options: ["align", "float", "clear", "position"],
        answer: 1,
        explanation: "The 'float' property is used to float an element to the left or right in CSS.",
      },
      {
        q: "Which CSS property is used to change the transparency of an element?",
        options: ["visibility", "opacity", "transparent", "filter"],
        answer: 1,
        explanation: "The 'opacity' property is used to change the transparency of an element.",
      },
      {
        q: "Which CSS property is used to make a background image repeat vertically?",
        options: ["background-repeat-y", "background-repeat", "background-repeat-vertical", "repeat-y"],
        answer: 1,
        explanation: "The 'background-repeat' property can be set to 'repeat-y' to make the background image repeat vertically.",
      },
      {
        q: "Which CSS property is used to position an element relative to its normal position?",
        options: ["relative", "absolute", "static", "fixed"],
        answer: 0,
        explanation: "The 'position: relative' property is used to position an element relative to its normal position.",
      },
      {
        q: "How can you make a list that lists its items with squares?",
        options: ["list-style-type: square;", "list-style: square;", "marker-style: square;", "list-type: square;"],
        answer: 0,
        explanation: "The 'list-style-type: square;' is used to list items with squares.",
      },
      {
        q: "Which CSS property is used to control the speed of the transition effect?",
        options: ["transition-speed", "speed", "duration", "transition-duration"],
        answer: 3,
        explanation: "The 'transition-duration' property is used to control the speed of the transition effect.",
      },
      {
        q: "Which CSS property is used to specify the space between letters?",
        options: ["letter-spacing", "spacing", "text-spacing", "word-spacing"],
        answer: 0,
        explanation: "The 'letter-spacing' property specifies the space between letters.",
      },
      {
        q: "Which CSS property is used to specify the stack order of an element?",
        options: ["stack-order", "z-index", "order", "position"],
        answer: 1,
        explanation: "The 'z-index' property specifies the stack order of an element in CSS.",
      },
      {
        q: "Which CSS property is used to make the text italic?",
        options: ["font-style", "font-weight", "text-style", "text-decoration"],
        answer: 0,
        explanation: "The 'font-style' property is used to make the text italic in CSS.",
      },
      {
        q: "Which CSS property is used to control the overflow of content in an element?",
        options: ["content-overflow", "overflow", "flow", "scroll"],
        answer: 1,
        explanation: "The 'overflow' property controls how content is handled if it overflows an element’s box.",
      },
      {
        q: "Which CSS property is used to center a block element horizontally?",
        options: ["text-align: center;", "margin-left: auto;", "margin: 0 auto;", "padding: 0 auto;"],
        answer: 2,
        explanation: "The 'margin: 0 auto;' is used to center a block element horizontally in CSS.",
      },
      {
        q: "Which CSS property is used to apply styles to a hover state?",
        options: ["hover-style", "hover-state", ":hover", "onhover"],
        answer: 2,
        explanation: "The ':hover' pseudo-class is used to apply styles to an element when hovered over by the mouse.",
      },
      {
        q: "Which CSS property is used to hide an element but still maintain its space in the layout?",
        options: ["display: none;", "visibility: hidden;", "opacity: 0;", "overflow: hidden;"],
        answer: 1,
        explanation: "The 'visibility: hidden;' property hides an element but still maintains its space in the layout.",
      },
      {
        q: "Which CSS property is used to align items inside a flex container?",
        options: ["align-content", "align-items", "justify-content", "flex-align"],
        answer: 1,
        explanation: "The 'align-items' property aligns items inside a flex container.",
      },
      {
        q: "Which CSS property is used to specify the distance between the border of an element and the adjacent elements?",
        options: ["padding", "margin", "spacing", "border-spacing"],
        answer: 1,
        explanation: "The 'margin' property specifies the distance between the border of an element and adjacent elements.",
      },
      {
        q: "Which CSS property is used to control the order of items in a flex or grid container?",
        options: ["order", "align-order", "z-index", "grid-order"],
        answer: 0,
        explanation: "The 'order' property controls the order of items in a flex or grid container.",
      }
];

// Arrays for Easy and Hard questions
const easyQuestionsArr = [
    {
        q: "Which CSS property is used to change the background color?",
        options: ["color", "bgcolor", "background-color", "background"],
        answer: 2,
        explanation: "The 'background-color' property is used to change the background color of an element in CSS.",
      },
      {
        q: "Which CSS property controls the text size?",
        options: ["font-size", "text-size", "font-style", "text-style"],
        answer: 0,
        explanation: "The 'font-size' property controls the size of the text in CSS.",
      },
      {
        q: "How do you add a comment in a CSS file?",
        options: ["// this is a comment", "/* this is a comment */", "<!-- this is a comment -->", "# this is a comment"],
        answer: 1,
        explanation: "Comments in CSS are added using '/* comment */' syntax.",
      },
      {
        q: "Which CSS property is used to change the text color of an element?",
        options: ["text-color", "font-color", "color", "text-style"],
        answer: 2,
        explanation: "The 'color' property is used to change the text color of an element in CSS.",
      },
      {
        q: "Which CSS property is used to change the font of an element?",
        options: ["font-style", "font-family", "font-size", "font-weight"],
        answer: 1,
        explanation: "The 'font-family' property is used to change the font of an element.",
      },
      {
        q: "Which CSS property is used to create space between the element’s border and inner content?",
        options: ["margin", "padding", "border", "spacing"],
        answer: 1,
        explanation: "The 'padding' property creates space between the element’s border and its content.",
      },
      {
        q: "Which CSS property is used to set the spacing between lines of text?",
        options: ["line-height", "letter-spacing", "text-spacing", "font-spacing"],
        answer: 0,
        explanation: "The 'line-height' property sets the spacing between lines of text.",
      },
      {
        q: "Which CSS property is used to make the text bold?",
        options: ["font-style", "font-weight", "text-transform", "text-decoration"],
        answer: 1,
        explanation: "The 'font-weight' property is used to make the text bold.",
      },
      {
        q: "How do you select an element with the id 'header' in CSS?",
        options: [".header", "#header", "header", "*header"],
        answer: 1,
        explanation: "In CSS, an element with the id 'header' is selected using '#header'.",
      },
      {
        q: "Which CSS property is used to align text to the center?",
        options: ["text-align", "align-text", "center-text", "text-center"],
        answer: 0,
        explanation: "The 'text-align' property is used to align text to the center in CSS.",
      },
      {
        q: "Which CSS property is used to add shadow to text?",
        options: ["font-shadow", "text-shadow", "shadow-text", "text-glow"],
        answer: 1,
        explanation: "The 'text-shadow' property is used to add shadow to text in CSS.",
      },
      {
        q: "Which CSS property is used to control the layout of multiple elements in a grid?",
        options: ["grid-layout", "grid-template", "grid-gap", "grid"],
        answer: 3,
        explanation: "The 'grid' property is used to control the layout of multiple elements in a grid in CSS.",
      },
      {
        q: "Which CSS property is used to set the width of an element?",
        options: ["element-width", "set-width", "width", "size-width"],
        answer: 2,
        explanation: "The 'width' property is used to set the width of an element in CSS.",
      },
      {
        q: "Which CSS property is used to add a border around an element?",
        options: ["border", "padding", "outline", "frame"],
        answer: 0,
        explanation: "The 'border' property is used to add a border around an element in CSS.",
      },
      {
        q: "Which CSS property is used to change the style of the list marker?",
        options: ["marker-style", "list-style", "list-marker", "marker"],
        answer: 1,
        explanation: "The 'list-style' property is used to change the style of the list marker.",
      }
];

const hardQuestionsArr = [
    {
        q: "Which property is used to float an element to the left or right?",
        options: ["align", "float", "clear", "position"],
        answer: 1,
        explanation: "The 'float' property is used to float an element to the left or right in CSS.",
      },
      {
        q: "Which CSS property is used to change the transparency of an element?",
        options: ["visibility", "opacity", "transparent", "filter"],
        answer: 1,
        explanation: "The 'opacity' property is used to change the transparency of an element.",
      },
      {
        q: "Which CSS property is used to make a background image repeat vertically?",
        options: ["background-repeat-y", "background-repeat", "background-repeat-vertical", "repeat-y"],
        answer: 1,
        explanation: "The 'background-repeat' property can be set to 'repeat-y' to make the background image repeat vertically.",
      },
      {
        q: "Which CSS property is used to position an element relative to its normal position?",
        options: ["relative", "absolute", "static", "fixed"],
        answer: 0,
        explanation: "The 'position: relative' property is used to position an element relative to its normal position.",
      },
      {
        q: "How can you make a list that lists its items with squares?",
        options: ["list-style-type: square;", "list-style: square;", "marker-style: square;", "list-type: square;"],
        answer: 0,
        explanation: "The 'list-style-type: square;' is used to list items with squares.",
      },
      {
        q: "Which CSS property is used to control the speed of the transition effect?",
        options: ["transition-speed", "speed", "duration", "transition-duration"],
        answer: 3,
        explanation: "The 'transition-duration' property is used to control the speed of the transition effect.",
      },
      {
        q: "Which CSS property is used to specify the space between letters?",
        options: ["letter-spacing", "spacing", "text-spacing", "word-spacing"],
        answer: 0,
        explanation: "The 'letter-spacing' property specifies the space between letters.",
      },
      {
        q: "Which CSS property is used to specify the stack order of an element?",
        options: ["stack-order", "z-index", "order", "position"],
        answer: 1,
        explanation: "The 'z-index' property specifies the stack order of an element in CSS.",
      },
      {
        q: "Which CSS property is used to make the text italic?",
        options: ["font-style", "font-weight", "text-style", "text-decoration"],
        answer: 0,
        explanation: "The 'font-style' property is used to make the text italic in CSS.",
      },
      {
        q: "Which CSS property is used to control the overflow of content in an element?",
        options: ["content-overflow", "overflow", "flow", "scroll"],
        answer: 1,
        explanation: "The 'overflow' property controls how content is handled if it overflows an element’s box.",
      },
      {
        q: "Which CSS property is used to center a block element horizontally?",
        options: ["text-align: center;", "margin-left: auto;", "margin: 0 auto;", "padding: 0 auto;"],
        answer: 2,
        explanation: "The 'margin: 0 auto;' is used to center a block element horizontally in CSS.",
      },
      {
        q: "Which CSS property is used to apply styles to a hover state?",
        options: ["hover-style", "hover-state", ":hover", "onhover"],
        answer: 2,
        explanation: "The ':hover' pseudo-class is used to apply styles to an element when hovered over by the mouse.",
      },
      {
        q: "Which CSS property is used to hide an element but still maintain its space in the layout?",
        options: ["display: none;", "visibility: hidden;", "opacity: 0;", "overflow: hidden;"],
        answer: 1,
        explanation: "The 'visibility: hidden;' property hides an element but still maintains its space in the layout.",
      },
      {
        q: "Which CSS property is used to align items inside a flex container?",
        options: ["align-content", "align-items", "justify-content", "flex-align"],
        answer: 1,
        explanation: "The 'align-items' property aligns items inside a flex container.",
      },
      {
        q: "Which CSS property is used to specify the distance between the border of an element and the adjacent elements?",
        options: ["padding", "margin", "spacing", "border-spacing"],
        answer: 1,
        explanation: "The 'margin' property specifies the distance between the border of an element and adjacent elements.",
      },
      {
        q: "Which CSS property is used to control the order of items in a flex or grid container?",
        options: ["order", "align-order", "z-index", "grid-order"],
        answer: 0,
        explanation: "The 'order' property controls the order of items in a flex or grid container.",
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

