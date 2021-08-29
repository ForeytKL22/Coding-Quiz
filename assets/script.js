var questions = [
    {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        A: "quotes",
        B: "curly brackets",
        C: "commas",
        D: "parenthesis",
        correctAnswer: "A"
    },
    {
        question: "A very useful tool used during developing and debugging is:",
        A: "JavaScript",
        B: "for loops",
        C: "console.log",
        D: "terminal",
        correctAnswer: "C"
    },
    {
        question: "Arrays in JavaScript can be used to store ______.",
        A: "numbers and strings",
        B: "other arrays",
        C: "booleans",
        D: "all of the above",
        correctAnswer: "D",
    },
    {
        question: "Commonly used data types do not include:",
        A: "strings",
        B: "booleans",
        C: "alerts",
        D: "numbers",
        correctAnswer: "C"
    },
    {
        question: "The condition in an if/else statement is enclosed with ________",
        A: "quotes",
        B: "curly brackets",
        C: "parenthesis",
        D: "square brackets",
        correctAnswer: "C"
    },
    {
        question: "This is a dumb question",
        A: "anser1",
        B: "answer23",
        C: "answer45",
        D: "answerr",
        correctAnswer: "C"
    }

]

var startQuiz = document.querySelector("#start-btn");
var timeLeft = 50;
var randomQuestion = "";

var questionEl = document.getElementById("question-title");
var buttonA = document.getElementById("button-a");
var buttonB = document.getElementById("button-b");
var buttonC = document.getElementById("button-c");
var buttonD = document.getElementById("button-d");
var currentQuestion = 0;
var rightOrWrong = document.getElementById("right-or-wrong");
var quizHomePage = document.getElementById("start-quiz");
var questionPage = document.getElementById("question-page");
var highScorePage = document.getElementById("high-score-page");
var enterInitials = document.getElementById("enter-name");
var highScoreButton = document.getElementById("high-score");
var userScore = document.getElementById("user-score");
var playerName = document.getElementById("enter-name");


function generateQuestion() {
    // for (currentQuestion = 0; currentQuestion < questions.length;) 
    
    highScorePage.style.display = "none";
    if (currentQuestion <=4) {

       
        questionEl.innerHTML = questions[currentQuestion].question;
        buttonA.innerHTML = questions[currentQuestion].A;
        buttonB.innerHTML = questions[currentQuestion].B;
        buttonC.innerHTML = questions[currentQuestion].C;
        buttonD.innerHTML = questions[currentQuestion].D;

        buttonA.addEventListener("click", checkAnswer);
        buttonB.addEventListener("click", checkAnswer);
        buttonC.addEventListener("click", checkAnswer);
        buttonD.addEventListener("click", checkAnswer);

        // return randomQuestion;
    }   else {
        endGame();
    }
};
   


function checkAnswer(e) {
    if (e.target.value !== questions[currentQuestion].correctAnswer) {
        timeLeft -= 10;
        rightOrWrong.innerHTML = "wrong";
    } else { 
    rightOrWrong.innerHTML = "right";
    }

    if (currentQuestion <= 4) {

    currentQuestion++;
    
    questionEl.innerHTML = questions[currentQuestion].question;
    buttonA.textContent = questions[currentQuestion].A;
    buttonB.innerHTML = questions[currentQuestion].B;
    buttonC.innerHTML = questions[currentQuestion].C;
    buttonD.innerHTML = questions[currentQuestion].D;
    } else {
        endGame();
    }

};

// var quizTimer;
var quizTimer;
var clock = document.getElementById("quiz-timer");

function timer() {

        clock.innerHTML = timeLeft + " seconds remaining.";

        timeLeft--;
        if (timeLeft === 0) {
            clearInterval(quizTimer);
            endGame();
        }

};


function endGame() {
    clearInterval(quizTimer);

    // localStorage.setItem("score", timeLeft.toString());
    // var localScore = localStorage.getItem("score");
    // userScore.innerHTML = localScore;

    questionPage.style.display = "none";
    highScorePage.style.display = "none";
    enterInitials.style.display = "unset";
};




function generateQuiz() {
    quizTimer = setInterval(timer, 1000);
    quizHomePage.style.display = "none";
    questionPage.style.display = "unset";
};


generateQuestion();

questionPage.style.display = "none";
highScorePage.style.display = "none";
enterInitials.style.display = "none";



highScoreButton.addEventListener("click", function(){
    questionPage.style.display = "none";
    enterInitials.style.display = "none";
    quizHomePage.style.display = "none";
    questionPage.style.display = "none";
    highScorePage.style.display = "unset";
});

startQuiz.addEventListener("click", generateQuiz);