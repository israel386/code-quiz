var timer = 60;
var questionN = 0;
var timeInt;

var timeEl = document.querySelector("#timer");
var startEl = document.querySelector("#start-quiz");
var question = document.querySelector("#question");
var choices = Array.from(document.querySelector(".choice-text"));

var startButton = function (event) {
    timerCountDown()
}

function timerCountDown() {
    var timeLeft = 60;

    var timeInterval = setInterval(function () {
        if (timeLeft >= 1) {
            timeEl.textContent = "Time: " + timeLeft;
            timeLeft--;
        }
        else if (timeLeft === 0) {
            timeEl.textContent = "Time: " + timeLeft;
            clearInterval(timeInterval);
            // when the timer runs out the quiz ends
            endQuiz();
        }
        if (timeleft === 0) {

        }
    }, 1000);
};
timerCountDown();















// startEl.addEventListener("click", startButton);