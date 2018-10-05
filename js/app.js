function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        //show questions
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        //show choices
        var choices = quiz.getQuestionIndex().choices;
        for(var i=0; i< choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
}

//Use this as a means to try fix audio issues
function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function () {
        quiz.guess(guess);
        populate();
    }
}


function showScores() {
    var gameOverHtml = "<h5>Results:</h5>";
    gameOverHtml += "<p id='score'>You scored " + quiz.score + " out of 10</p>";
    var element= document.getElementById("quiz");
    element.innerHTML = gameOverHtml;
}

var questions = [
    new Question("1. Konnichiwa", ["How do you do?", "Hello", "To Sleep", "Good Evening"], "Hello"),
    new Question("2. See you later", ["Konbanwa", "Ohayougozaimasu", "Wakaru", "Jaa mata"], "Jaa mata"),
    new Question("3. Wakaru", ["To Understand", "To Sleep", "To Do", "To Eat"], "To Understand"),
    new Question("4. Miru", ["To Do", "Good Bye", "To See", "To Ask"], "To See"),
    new Question("5. Nice to meet you", ["Hajimemashite", "Sayounara", "Konnichiwa", "Douzoyoroshiku"], "Douzoyoroshiku"),
    new Question("6. Good night", ["Sayounara", "Oyasuminasai", "Konbanwa", "Neru"], "Oyasuminasai"),
    new Question("7. Good evening", ["Konnichiwa", "Oyasuminasai", "Konbanwa", "Hanasu"], "Konbanwa"),
    new Question("8. Hajimemashite", ["Nice to meet you", "To See", "To Understand", "How do you do"], "How do you do"),
    new Question("9. Taberu", ["To Eat", "To Sleep", "To Drink", "To Ask"], "To Eat"),
    new Question("10. To Drink", ["Hanasu", "Miru", "Nomu", "Kiku"], "Nomu")
];

//Object for quiz controller
var quiz = new Quiz(questions);

//funtion to populate questions in Quiz
populate();
