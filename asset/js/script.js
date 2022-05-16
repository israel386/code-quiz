var timeEl = document.querySelector("#timer");
var question = document.querySelector("#question");
var choices = Array.from(document.querySelectorAll(".choice-text"));

let currentQuestion = {};
let acceptingAnswers = true;
var timeLeft = 50;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: "A very useful tool used during development and debugging for printing content to the degugger is:",
        choice1: "JavaScript",
        choice2: "terminal/bash",
        choice3: "for loops",
        choice4: "console.log",
        answer: 4,
    },
    {
        question: "Commonly used data types DO NOT include:",
        choice1: "strings",
        choice2: "booleans",
        choice3: "alerts",
        choice4: "numbers",
        answer: 3,
    },
    {
        question: "The condition in an if / else statement is enclosed with __________.",
        choice1: "Quotes",
        choice2: "curly brackets",
        choice3: "paraenthesis",
        choice4: "square brackets",
        answer: 3,
    },
    {
        question: "String values must be enclosed within __________ when being assigned to variables.",
        choice1: "commas",
        choice2: "curly brackets",
        choice3: "quotes",
        choice4: "paranthesis",
        answer: 3,
    },
    {
        question: "Arrays in JavaScript can be used to store __________.",
        choice1: "number and strings",
        choice2: "other arrays",
        choice3: "booleans",
        choice4: "all of the above",
        answer: 4,
    }
];

const MAX_QUESTIONS = 5;

startQuiz = () => {
    questionCounter = 0;
    availableQuestions = [...questions];
    var timeInterval = setInterval(function () {
        if (timeLeft >= 1) {
            timeEl.textContent = "Time: " + timeLeft;
            timeLeft--;
        }
        else if (timeLeft === 0) {
            timeEl.textContent = "Time: " + timeLeft;
            clearInterval(timeInterval);
            endQuiz();
        }
        if (timeLeft === 0) {

        }
    }, 1000);

    getNewQuestion();
};

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/end.html')
    };

    questionCounter++

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    })

    availableQuestions.splice(questionsIndex, 1);

    acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if (!acceptingAnswers) return

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];

        let classToApply = selectedAnswer == currentQuestion.anwer ? "correct" : "incorrect";
        if (classToApply === "incorrect") {
            timeLeft = timeLeft - 10;
        }

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);

    });
});

startQuiz();

