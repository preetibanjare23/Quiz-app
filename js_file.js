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
    q: "Which keyword is used to declare a variable in JavaScript?",
    options: ["var", "let", "const", "All of the above"],
    answer: 3,
    explanation: "The keywords 'var', 'let', and 'const' are all used to declare variables in JavaScript.",
  },
  {
    q: "What does '===' mean in JavaScript?",
    options: ["Equal to", "Equal value and equal type", "Assignment", "None of the above"],
    answer: 1,
    explanation: "The '===' operator checks for both value and type equality in JavaScript.",
  },
  {
    q: "Which method is used to find the length of a string in JavaScript?",
    options: [".size()", ".length()", ".length", ".getSize()"],
    answer: 2,
    explanation: "The '.length' property is used to find the length of a string in JavaScript.",
  },
  {
    q: "Which method is used to add an element to the end of an array in JavaScript?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    answer: 0,
    explanation: "The push() method is used to add an element to the end of an array in JavaScript.",
  },
  {
    q: "Which of the following is not a JavaScript data type?",
    options: ["String", "Number", "Boolean", "Character"],
    answer: 3,
    explanation: "JavaScript does not have a 'Character' data type; 'String' is used for text.",
  },
  {
    q: "Which function is used to parse a string to an integer in JavaScript?",
    options: ["parseInt()", "getInteger()", "toInteger()", "int()"],
    answer: 0,
    explanation: "The 'parseInt()' function parses a string and returns an integer.",
  },
  {
    q: "Which event occurs when the user clicks on an HTML element?",
    options: ["onchange", "onclick", "onmouseclick", "onmouseover"],
    answer: 1,
    explanation: "The 'onclick' event occurs when an element is clicked in JavaScript.",
  },
  {
    q: "How do you declare a JavaScript array?",
    options: ["var arr = []", "var arr = {}", "var arr = ()", "var arr = <>"],
    answer: 0,
    explanation: "A JavaScript array is declared using square brackets '[]'.",
  },
  {
    q: "Which method can be used to join two or more arrays in JavaScript?",
    options: ["join()", "concat()", "push()", "merge()"],
    answer: 1,
    explanation: "The 'concat()' method is used to join two or more arrays.",
  },
  {
    q: "What is the output of 'console.log(typeof null)' in JavaScript?",
    options: ["null", "object", "undefined", "string"],
    answer: 1,
    explanation: "In JavaScript, the 'typeof null' returns 'object', which is a known bug.",
  },
  {
    q: "Which JavaScript method is used to add an element to the end of an array?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    answer: 0,
    explanation: "The 'push()' method adds an element to the end of an array.",
  },
  {
    q: "How do you convert a string to lowercase in JavaScript?",
    options: [".toLower()", ".lower()", ".toLowerCase()", ".lowerCase()"],
    answer: 2,
    explanation: "The '.toLowerCase()' method converts a string to lowercase.",
  },
  {
    q: "What is the correct way to write a JavaScript array?",
    options: ["var colors = (1:'red', 2:'green', 3:'blue')", "var colors = ['red', 'green', 'blue']", "var colors = 'red', 'green', 'blue'", "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')"],
    answer: 1,
    explanation: "The correct syntax to define an array is 'var colors = ['red', 'green', 'blue']'.",
  },
  {
    q: "Which symbol is used to terminate a statement in JavaScript?",
    options: [",", ":", ";", "."],
    answer: 2,
    explanation: "A semicolon ';' is used to terminate a statement in JavaScript.",
  },
  {
    q: "How do you find the maximum number in an array in JavaScript?",
    options: ["Math.max()", "Array.max()", "Math.max.apply()", "Array.max.apply()"],
    answer: 2,
    explanation: "The 'Math.max.apply()' method can be used to find the maximum number in an array.",
  },
  {
    q: "Which method removes the last element from an array in JavaScript?",
    options: ["pop()", "push()", "shift()", "unshift()"],
    answer: 0,
    explanation: "The 'pop()' method removes the last element from an array.",
  },
  {
    q: "What is the purpose of 'this' keyword in JavaScript?",
    options: ["Refers to the current object", "Refers to the previous object", "Refers to the global object", "Refers to a new object"],
    answer: 0,
    explanation: "The 'this' keyword refers to the current object in JavaScript.",
  },
  {
    q: "Which JavaScript method can be used to find if a string includes a certain value?",
    options: ["includes()", "contains()", "has()", "indexOf()"],
    answer: 0,
    explanation: "The 'includes()' method checks if a string contains a certain value.",
  },
  {
    q: "How do you define a function in JavaScript?",
    options: ["function = myFunction()", "function:myFunction()", "function myFunction()", "myFunction():function"],
    answer: 2,
    explanation: "A function is defined using the 'function' keyword followed by the function name.",
  },
  {
    q: "What will 'console.log(2 + '2')' output?",
    options: ["4", "'22'", "'NaN'", "Error"],
    answer: 1,
    explanation: "In JavaScript, '2' + '2' results in '22' due to type coercion.",
  },
  {
    q: "What does 'NaN' stand for in JavaScript?",
    options: ["Not a Number", "Null and None", "Negative and Null", "None of the Above"],
    answer: 0,
    explanation: "'NaN' stands for 'Not a Number' and represents a value that is not a legal number.",
  },
  {
    q: "Which operator is used to assign a value to a variable in JavaScript?",
    options: ["*", "-", "=", "+"],
    answer: 2,
    explanation: "The '=' operator is used to assign a value to a variable in JavaScript.",
  },
  {
    q: "What will 'typeof []' return in JavaScript?",
    options: ["array", "object", "null", "undefined"],
    answer: 1,
    explanation: "In JavaScript, 'typeof []' returns 'object' because arrays are objects.",
  },
  {
    q: "How can you convert a number to a string in JavaScript?",
    options: ["String(number)", "number.toString()", "Both A and B", "None of the above"],
    answer: 2,
    explanation: "Both 'String(number)' and 'number.toString()' can be used to convert a number to a string.",
  },
  {
    q: "Which method can be used to remove whitespace from both ends of a string?",
    options: ["trim()", "strip()", "slice()", "remove()"],
    answer: 0,
    explanation: "The 'trim()' method removes whitespace from both ends of a string.",
  },
  {
    q: "Which keyword is used to create a constant in JavaScript?",
    options: ["const", "var", "let", "constant"],
    answer: 0,
    explanation: "The 'const' keyword is used to declare a constant in JavaScript.",
  },
  {
    q: "What is the output of 'console.log(typeof undefined)' in JavaScript?",
    options: ["undefined", "null", "object", "string"],
    answer: 0,
    explanation: "'typeof undefined' returns 'undefined' because that is the type of the value.",
  },
  {
    q: "Which method is used to find the index of the first occurrence of a specified value in a string?",
    options: ["indexOf()", "findIndex()", "search()", "includes()"],
    answer: 0,
    explanation: "The 'indexOf()' method returns the index of the first occurrence of a specified value in a string.",
  },
  {
    q: "How do you write a conditional statement in JavaScript?",
    options: ["if (condition) {}", "if condition {}", "if (condition) then {}", "if (condition) do {}"],
    answer: 0,
    explanation: "The correct way to write a conditional statement is 'if (condition) {}'.",
  },
  {
    q: "Which method is used to add an element at the beginning of an array?",
    options: ["unshift()", "shift()", "push()", "pop()"],
    answer: 0,
    explanation: "The 'unshift()' method adds an element to the beginning of an array.",
  }
];


// Arrays for Easy and Hard questions
const easyQuestionsArr = [
  {
    q: "Which keyword is used to declare a variable in JavaScript?",
    options: ["var", "let", "const", "All of the above"],
    answer: 3,
    explanation: "The keywords 'var', 'let', and 'const' are all used to declare variables in JavaScript.",
  },
  {
    q: "What does '===' mean in JavaScript?",
    options: ["Equal to", "Equal value and equal type", "Assignment", "None of the above"],
    answer: 1,
    explanation: "The '===' operator checks for both value and type equality in JavaScript.",
  },
  {
    q: "Which method is used to find the length of a string in JavaScript?",
    options: [".size()", ".length()", ".length", ".getSize()"],
    answer: 2,
    explanation: "The '.length' property is used to find the length of a string in JavaScript.",
  },
  {
    q: "How do you write a comment in JavaScript?",
    options: ["<!-- Comment -->", "// Comment", "/* Comment */", "Both B and C"],
    answer: 3,
    explanation: "Single-line comments use '//', and multi-line comments use '/* */' in JavaScript.",
  },
  {
    q: "Which of the following is not a JavaScript data type?",
    options: ["String", "Number", "Boolean", "Character"],
    answer: 3,
    explanation: "JavaScript does not have a 'Character' data type; 'String' is used for text.",
  },
  {
    q: "Which function is used to parse a string to an integer in JavaScript?",
    options: ["parseInt()", "getInteger()", "toInteger()", "int()"],
    answer: 0,
    explanation: "The 'parseInt()' function parses a string and returns an integer.",
  },
  {
    q: "Which event occurs when the user clicks on an HTML element?",
    options: ["onchange", "onclick", "onmouseclick", "onmouseover"],
    answer: 1,
    explanation: "The 'onclick' event occurs when an element is clicked in JavaScript.",
  },
  {
    q: "How do you declare a JavaScript array?",
    options: ["var arr = []", "var arr = {}", "var arr = ()", "var arr = <>"],
    answer: 0,
    explanation: "A JavaScript array is declared using square brackets '[]'.",
  },
  {
    q: "Which method can be used to join two or more arrays in JavaScript?",
    options: ["join()", "concat()", "push()", "merge()"],
    answer: 1,
    explanation: "The 'concat()' method is used to join two or more arrays.",
  },
  {
    q: "What is the output of 'console.log(typeof null)' in JavaScript?",
    options: ["null", "object", "undefined", "string"],
    answer: 1,
    explanation: "In JavaScript, the 'typeof null' returns 'object', which is a known bug.",
  },
  {
    q: "Which JavaScript method is used to add an element to the end of an array?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    answer: 0,
    explanation: "The 'push()' method adds an element to the end of an array.",
  },
  {
    q: "How do you convert a string to lowercase in JavaScript?",
    options: [".toLower()", ".lower()", ".toLowerCase()", ".lowerCase()"],
    answer: 2,
    explanation: "The '.toLowerCase()' method converts a string to lowercase.",
  },
  {
    q: "What is the correct way to write a JavaScript array?",
    options: ["var colors = (1:'red', 2:'green', 3:'blue')", "var colors = ['red', 'green', 'blue']", "var colors = 'red', 'green', 'blue'", "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')"],
    answer: 1,
    explanation: "The correct syntax to define an array is 'var colors = ['red', 'green', 'blue']'.",
  },
  {
    q: "Which symbol is used to terminate a statement in JavaScript?",
    options: [",", ":", ";", "."],
    answer: 2,
    explanation: "A semicolon ';' is used to terminate a statement in JavaScript.",
  },
  {
    q: "How do you find the maximum number in an array in JavaScript?",
    options: ["Math.max()", "Array.max()", "Math.max.apply()", "Array.max.apply()"],
    answer: 2,
    explanation: "The 'Math.max.apply()' method can be used to find the maximum number in an array.",
  },
  {
    q: "Which method removes the last element from an array in JavaScript?",
    options: ["pop()", "push()", "shift()", "unshift()"],
    answer: 0,
    explanation: "The 'pop()' method removes the last element from an array.",
  }
];

const hardQuestionsArr = [
  {
    q: "What is the purpose of 'this' keyword in JavaScript?",
    options: ["Refers to the current object", "Refers to the previous object", "Refers to the global object", "Refers to a new object"],
    answer: 0,
    explanation: "The 'this' keyword refers to the current object in JavaScript.",
  },
  {
    q: "Which JavaScript method can be used to find if a string includes a certain value?",
    options: ["includes()", "contains()", "has()", "indexOf()"],
    answer: 0,
    explanation: "The 'includes()' method checks if a string contains a certain value.",
  },
  {
    q: "How do you define a function in JavaScript?",
    options: ["function = myFunction()", "function:myFunction()", "function myFunction()", "myFunction():function"],
    answer: 2,
    explanation: "A function is defined using the 'function' keyword followed by the function name.",
  },
  {
    q: "What will 'console.log(2 + '2')' output?",
    options: ["4", "'22'", "'NaN'", "Error"],
    answer: 1,
    explanation: "In JavaScript, '2' + '2' results in '22' due to type coercion.",
  },
  {
    q: "What does 'NaN' stand for in JavaScript?",
    options: ["Not a Number", "Null and None", "Negative and Null", "None of the Above"],
    answer: 0,
    explanation: "'NaN' stands for 'Not a Number' and represents a value that is not a legal number.",
  },
  {
    q: "Which operator is used to assign a value to a variable in JavaScript?",
    options: ["*", "-", "=", "+"],
    answer: 2,
    explanation: "The '=' operator is used to assign a value to a variable in JavaScript.",
  },
  {
    q: "What will 'typeof []' return in JavaScript?",
    options: ["array", "object", "null", "undefined"],
    answer: 1,
    explanation: "In JavaScript, 'typeof []' returns 'object' because arrays are objects.",
  },
  {
    q: "How can you convert a number to a string in JavaScript?",
    options: ["String(number)", "number.toString()", "Both A and B", "None of the above"],
    answer: 2,
    explanation: "Both 'String(number)' and 'number.toString()' can be used to convert a number to a string.",
  },
  {
    q: "Which method can be used to remove whitespace from both ends of a string?",
    options: ["trim()", "strip()", "slice()", "remove()"],
    answer: 0,
    explanation: "The 'trim()' method removes whitespace from both ends of a string.",
  },
  {
    q: "Which keyword is used to create a constant in JavaScript?",
    options: ["const", "var", "let", "constant"],
    answer: 0,
    explanation: "The 'const' keyword is used to declare a constant in JavaScript.",
  },
  {
    q: "What is the output of 'console.log(typeof undefined)' in JavaScript?",
    options: ["undefined", "null", "object", "string"],
    answer: 0,
    explanation: "'typeof undefined' returns 'undefined' because that is the type of the value.",
  },
  {
    q: "Which method is used to find the index of the first occurrence of a specified value in a string?",
    options: ["indexOf()", "findIndex()", "search()", "includes()"],
    answer: 0,
    explanation: "The 'indexOf()' method returns the index of the first occurrence of a specified value in a string.",
  },
  {
    q: "How do you write a conditional statement in JavaScript?",
    options: ["if (condition) {}", "if condition {}", "if (condition) then {}", "if (condition) do {}"],
    answer: 0,
    explanation: "The correct way to write a conditional statement is 'if (condition) {}'.",
  },
  {
    q: "Which method is used to add an element at the beginning of an array?",
    options: ["unshift()", "shift()", "push()", "pop()"],
    answer: 0,
    explanation: "The 'unshift()' method adds an element to the beginning of an array.",
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


// Total time in seconds (4 minutes)
let time = 4 * 60;

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
    time = 4 * 60; // 4 minutes in seconds
    
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

