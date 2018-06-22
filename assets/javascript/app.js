// make objects with the question and anwsers
// be able to make a container with the questions and anwsers
// add a timer to the questions 
// make the buttons clickable
// win loss at the end screen

var questions = [{
        q: "What was the name of the Smiths dog in Rick and Morty?",
        b: "Snuffles",
        a: "Snowball",
        c: "Skittles",
        d: "Summer"
    },
    {
        q: "In the show 'Breaking Bad', what is Jesse's last name?",
        a: "Smith",
        c: "White",
        b: "Pinkman",
        d: "Greene"
    },
    {
        q: " Click This Button For Next Question",
        a: "",
        d: "",
        c: "",
        b: "click me!"
    },

    {
        q: "In 'Breaking Bad', what substance are they making?",
        a: "Crack",
        c: "Marijuana",
        b: "Meth",
        d: "Cookies"
    },
    {
        q: " Click This Button For Next Question10",
        a: "",
        d: "",
        c: "",
        b: "click me!"
    },
    {
        q: " Click This Button For Next Question9",
        a: "",
        d: "",
        c: "",
        b: "click me!"
    },
    {
        q: "From the show 'South Park' who is a towel?",
        a: "Cartman",
        c: "Kyle",
        d: "You are",
        b: "You are"
    },
    {
        q: "From the show 'South Park' who is a towel? ",
        a: "Cartman",
        d: "Kyle",
        c: "Stan",
        b: "You are"
    },
    {
        q: " Click This Button For Next Question7",
        a: "",
        d: "",
        c: "",
        b: "click me!"
    },

    {
        q: " Click This Button For Next Question6",
        a: "",
        d: "",
        c: "",
        b: "click me!"
    },
    {
        q: " Click This Button For Next Question5",
        a: "",
        d: "",
        c: "",
        b: "click me!"
    },
    {
        q: "In 'Rick and Morty' what does Rick always say?",
        a: "Rub a dub dub!",
        c: "Ayo!",
        b: "Wubba Lubba Dub Dub",
        d: "Summer!"
    },
    {
        q: " Click This Button For Next Question2",
        a: "",
        d: "",
        c: "",
        b: "click me!"
    },
    {
        q: " Click This Button For Next Question1",
        a: "",
        d: "",
        c: "",
        b: "click me!"
    },
    {
        q: " Click This Button For Next Question1",
        a: "",
        d: "",
        c: "",
        b: "click me!"
    },
    {
        q: "In the show 'Family Guy', what is the word??",
        b: "Bird",
        a: "Word",
        c: "Family",
        d: "Funny"
    },
    {
        q: " Click This Button For Next Question1.4",
        a: "",
        d: "",
        c: "",
        b: "click me!"
    },
    {
        q: " Click This Button For Next Question1.3",
        a: "",
        d: "",
        c: "",
        b: "click me!"
    },
    {
        q: " Which of the following items was owned by the fewest U.S. homes in 1990?",
        a: "Home computer",
        d: "Cordless phone",
        c: "Dishwasher",
        b: "Compact disk player"
    },
    {
        q: " Click This Button For Next Question1.2",
        a: "",
        d: "",
        c: "",
        b: "click me!"
    },
    {
        q: " Click This Button For Next Question1.1",
        a: "",
        d: "",
        c: "",
        b: "click me!"
    },
    {
        q: "In the show 'Family Guy', what is the word?",
        b: "Bird",
        a: "Word",
        c: "Family",
        d: "Funny"
    },
    {
        q: " Click This Button For Next Question1.13",
        a: "",
        d: "",
        c: "",
        b: "click me!"
    }, {
        q: " Click This Button For Next Question1.12",
        a: "",
        d: "",
        c: "",
        b: "click me!"
    }, {
        q: " Which of the following items was owned by the fewest U.S. homes in 1990?",
        a: "Home computer",
        d: "Cordless phone",
        c: "Dishwasher",
        b: "Compact disk player"
    },
    {
        q: " Click This Button For Next Question1.133",
        a: "",
        d: "",
        c: "",
        b: "click me!"
    },{
        q: " Click This Button For Next Question1.133",
        a: "",
        d: "",
        c: "",
        b: "click me!"
    },
    {
        q: "In 1990, in what percentage of U.S. married couples did the wife earn more money than the husband?",
        a: "8",
        d: "38",
        c: "58",
        b: "18"
    },
];
var counter = 20;
var timer = $("#timer");
var losses = 0;
var wins = 0;
var questionNum = 0;
// var anwsers = {q1 = question1.b,q2 = question2.b,q3 = question3.b,q4 = question4.b};







$(document).ready(function () {
    function startGame() {
        $("#question").text("Press Start to play!");
        $("#anwser1").text("");
        $("#anwser2").text("");
        $("#anwser3").text("");
        $("#anwser4").text(" ");
        $(".start").on("click", function () {
            console.log($(this).text());
            loadQuestion();
            
        })


    }

    function loadQuestion() {

        countDown();
        $("#question").html(questions[questionNum].q);
        $("#anwser1").text(questions[questionNum].c);
        $("#anwser2").text(questions[questionNum].a);
        $("#anwser3").text(questions[questionNum].b);
        $("#anwser4").text(questions[questionNum].d);




        $(".anwser").on("click", function () {
            var selection = $(this).text();
            console.log("fire event 1")
            console.log('selection: ' + selection)
            console.log(questions[questionNum].b)
            if (selection === questions[questionNum].b) {
                wins++;
                console.log("wins are " + wins);
                questionNum++;
                loadQuestion();
            } else {
                losses++;
                console.log("first losses are" + losses)
                questionNum++;
                loadQuestion();
            }
        });

    }

    function secondQuestion() {
        countDown();
        questionNum++;
        // countDown();
        $("#question").html(questions[questionNum].q);
        $("#anwser1").text(questions[questionNum].b);
        $("#anwser2").text(questions[questionNum].a);
        $("#anwser3").text(questions[questionNum].c);
        $("#anwser4").text(questions[questionNum].d);




        $(".anwser").on("click", function () {
            var selection = $(this).text();
            console.log("fire event 1")
            console.log('selection: ' + selection)
            console.log(questions[questionNum].b)
            if (selection === questions[questionNum].b) {
                wins++;
                console.log("wins are " + wins);
                thirdQuestion();

            } else {
                losses++;
                console.log("first losses are" + losses)
                thirdQuestion();

            }
        });
    }

    function thirdQuestion() {
        countDown();
        questionNum++;
        // countDown();
        $("#question").html(questions[questionNum].q);
        $("#anwser1").text(questions[questionNum].d);
        $("#anwser2").text(questions[questionNum].a);
        $("#anwser3").text(questions[questionNum].c);
        $("#anwser4").text(questions[questionNum].b);




        $(".anwser").on("click", function () {
            var selection = $(this).text();
            console.log("fire event 1")
            console.log('selection: ' + selection)
            console.log(questions[questionNum].b)
            if (selection === questions[questionNum].b) {
                wins++;
                console.log("wins are " + wins);
                loadQuestion();

            } else {
                losses++;
                console.log("first losses are" + losses)
                loadQuestion();

            }
        });
    }







    setInterval(countDown,1000);

    function countDown() {
            counter;
            timer.html(counter);
            counter--;
            
            if (counter = 0) {
                clearInterval(countDown);
    
            } else {
                timer.innerHTML = counter + ' seconds remaining';
              counter--;
            }
        }

        
        
    // firstQuestion();
    startGame();
});