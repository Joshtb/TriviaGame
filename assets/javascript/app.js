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
        q:"In the show 'Family Guy', what is the name of the talking dog?",
        a:"Billy",
        b:"Brian",
        c:"Buster",
        d:"Bryce"

    },
    {
        q: "In the show 'Breaking Bad', what is Jesse's last name?",
        a: "Smith",
        c: "White",
        b: "Pinkman",
        d: "Greene"
    },
    {
        q:"In the show 'Dexter', what is Dexter's sisters name?",
        a:"Denise",
        b:"Deborah",
        c:"Danielle",
        d:"Diana"

    },
    {
        q: "In 'Breaking Bad', what substance are they making?",
        a: "Crack",
        c: "Marijuana",
        b: "Meth",
        d: "Cookies"
    },
    {
        q: "From the show 'South Park' who is a towel?",
        a: "Cartman",
        c: "Kyle",
        d: "Stan",
        b: "You are"
    },
    {
        q: "In 'Rick and Morty' what does Rick always say?",
        a: "Rub a dub dub!",
        c: "Ayo!",
        b: "Wubba Lubba Dub Dub",
        d: "Summer!"
    },
    {
        q: "In the show 'Trailer Park Boys', what does Bubbles do for a living?",
        a: "Steal",
        d: "Welfare",
        c: "Legal Advice",
        b: "Rebuilds Shopping Carts"
    },
    {
        q: "In the show 'Family Guy', what is the word?",
        b: "Bird",
        a: "Word",
        c: "Family",
        d: "Funny"
    },
    {
        q: "In the show 'Trailer Park Boys', Who doesn't wear a shirt?",
        a: "Mr Lahey",
        d: "Ricky",
        c: "Bubbles",
        b: "Randy"
    },
    {
        q:"GAME OVER",
        c:"Your score is",
        a:"at the Bottom",
        b:"Click Refresh",
        d:"To try again!"
        
    
    }  
];

var timer = $("#timer");
var winBoard =$("#wins");
var lossBoard =$("#losses");
var losses = 0;
var wins = 0;
var counter = 11;

var questionNum = 0;
var gameRunning = false;


// var anwsers = {q1 = question1.b,q2 = question2.b,q3 = question3.b,q4 = question4.b};


// ******PUT CLICK EVENTS INTO DOC>READY, PUT IF STATEMENTS IN THE CLICK EVENT!****




$(document).ready(function () {
    $(".start").on("click", function () {
        console.log($(this).text());
        // stopTime2();
        loadQuestion();
        if (gameRunning === false){
            counter = 0;
            endCounter=0;
            stopTime();
            // stopTime2();
        }else {
            // stopTime2();
            counter = 11;
           timeStart;
        }

    })

    $(".anwser").on("click", function () {
        var selection = $(this).text();
        
        console.log('selection: ' + selection)
        console.log(questions[questionNum].b)
        if (selection === questions[questionNum].b) {
            timeStart;
            timer.html(counter);
            wins++;
            winBoard.html(wins);
            questionNum++;
            loadQuestion();
        } else if (selection !== questions[questionNum].b) {
            timer.html(counter);
            lossBoard.html(losses);
            losses++;
            
           
            timeStart;
            endPage();
         
           
        }
    
        
    });

    function startGame() {
        gameRunning = false;
           
        $("#question").text("Press Start to play!");
        $("#anwser1").text("");
        $("#anwser2").text("");
        $("#anwser3").text("");
        $("#anwser4").text(" ");



    }

    function loadQuestion() {
        // setInterval(function(){countDown(),counter}, 1000);
        timeStart;
        gameRunning = true;
       counter = 11;
       timer.html(counter);
    
        $("#question").html(questions[questionNum].q);
        $("#anwser1").text(questions[questionNum].c);
        $("#anwser2").text(questions[questionNum].a);
        $("#anwser3").text(questions[questionNum].b);
        $("#anwser4").text(questions[questionNum].d);
       
    }
    var timeStart = setInterval(function(){countDown(),counter}, 1000);
    // var newTimeStart = setInterval(function(){newCountDown(),newCounter}, 1000);
    
    function loadQuestion2() {
        // setInterval(function(){countDown(),counter}, 1000);
        counter = 10;
        timeStart;
        console.log(timeStart);
      
        timer.html(counter);
     if (counter == 2){
         timeStart;
         counter =10;
     }
        gameRunning = true;
      
       
        
        $("#question").html(questions[questionNum].q);
        $("#anwser1").text(questions[questionNum].b);
        $("#anwser2").text(questions[questionNum].a);
        $("#anwser3").text(questions[questionNum].c);
        $("#anwser4").text(questions[questionNum].d);
        $('#wins').html(wins);
        $("#losses").html(losses);
    }
   




    function countDown() {
        console.log(counter);
        counter--;
        timer.html(counter);
        if (counter == 0){
           losses++;
            endPage();
         } else if( counter == -4){
            counter = 11;
             questionNum++;
             loadQuestion2();
             timeStart;
             
         }
    }

    function stopTime(){
        clearInterval(timeStart);
    }

    var newCounter = 4;

 function endPage(){
    timeStart;
        counter = -2;
       
        if(counter == -4){
            console.log("newcounteris0")

           stopTime();
            questionNum++;
            loadQuestion2();
            timeStart;
        }
        
        // newTimeStart;
        // newCounter= 4;
    
        $("#question").text("The Answer was " + questions[questionNum].b);
        $("#anwser1").html("");
        $("#anwser2").html("");
        $("#anwser3").text("");
        $("#anwser4").text("");
        $('#wins').html(wins);
        $("#losses").html(losses);
        if(counter == 0){
            console.log("newcounteris0")
           stopTime();
            questionNum++;
            loadQuestion2();
            timeStart;
        }
        
 }
//  function newCountDown(){
//     console.log("end counter is" + newCounter);
//     timer.html(newCounter);
//     newCounter--;
//     if(newCounter == 0){
//         console.log("newcounteris0")
//         stopTime2();
//         timeStart;
//         questionNum++;
//         loadQuestion2();
//     }
// }
// function stopTime2(){
//     clearInterval(newTimeStart);
// }



    startGame();
});