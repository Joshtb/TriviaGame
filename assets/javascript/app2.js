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
  q: "In the show 'Dexter', what is Dexters' sisters name?",
  a: "Danielle",
  d: "Diana",
  c: "Denise",
  b: "Deborah"
},
{
  q: "In 'Breaking Bad', what substance are they making?",
  a: "Crack",
  c: "Marijuana",
  b: "Meth",
  d: "Cookies"
},
{
  q: "In 'Rick and Morty' what does Rick always say?",
  a: "Rub a dub dub!",
  c: "Ayo!",
  b: "Wubba Lubba Dub Dub",
  d: "Summer!"

},
{
  q: "From the show 'South Park' who is a towel?",
  a: "Cartman",
  c: "Kyle",
  d: "Stan",
  b: "You are"

},
{
  q: "In the show 'Family Guy', what is the word?",
  b: "Bird",
  a: "Word",
  c: "Family",
  d: "Funny"
},
];
var timeLeft = 20;
var time = $("#timer").html(timeLeft);
var losses = 0;
var wins = 0;
var questionNum = 0;
// var anwsers = {q1 = question1.b,q2 = question2.b,q3 = question3.b,q4 = question4.b};

$(document).ready(function () {
  function startGame() {
    $("#question").text("Press Start to play!");
    $("#anwser1").text("");
    $("#anwser2").text("Start Game");
    $("#anwser3").text("");
    $("#anwser4").text(" ");
    $(".start").on("click", function () {
      console.log($(this).text())
      loadQuestion();
    })
  }

  function loadQuestion() {
    // countDown();
    $("#question").html(questions[questionNum].q);
    $("#anwser1").text(questions[questionNum].c);
    $("#anwser2").text(questions[questionNum].a);
    $("#anwser3").text(questions[questionNum].b);
    $("#anwser4").text(questions[questionNum].d);

  }

  $(".answer").on("click", function () {
    var selection = $(this).text()
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

  function countDown() {
    var timerId = setInterval(countDown, 1000);
    if (timeLeft == 0) {
      clearTimeout(timerId);

    } else {
      time.innerHTML = timeLeft + ' seconds remaining';
      timeLeft--;
    }
  }

  startGame();
});