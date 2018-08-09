var quotes = [
    "They kick you when you\'re down, but they wanna kick it when you\'re up.",
    "Keep your eyes on the stars and your feet on the ground.",
    "All that I am, or hope to be I owe to my angel mother",
    "The object of love is to serve, not to win.",
    "I always make my dreams into goals.",
    "You can do what you have to do, and sometimes you can do it better than you think.",
    "I am a slow walker, but I never walk back.",
    "The key is to vote because we need a vote to put the people in power that we want to represent us." ,
    "Without passion you don't have energy, without energy you have nothing.",
    "You can never run out of keys."
];

var quotesKhalid = [
    true, 
    false, 
    false, 
    false, 
    true, 
    false, 
    false, 
    true, 
    false, 
    true
];


var correct;
var incorrect;
var intervalId;
var timeLeft =  10;
var print = $('.main');

//This function begins the timer for the game.
function countdown() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000)
}

//This function is called upon within the countdown function every second, 
//it decreases and prints the current time left, and signals the end of the game when the time left is zero.
function decrement() {
    timeLeft--;
    $("#clock").text(timeLeft)
    console.log(timeLeft);
    if (timeLeft ===0) {
        clearInterval(intervalId);
        endGame();
    }
}

//This function tells the game what to do when it ends.
function endGame() {
    console.log("Game over!")
}

//This event covers the start of the game, upon click of the start button.
$("#start").on("click", function() {
    //removes button and preps area for more content
    print.empty();

    //prints the countdown timer and provides an id for the decrement function to overwrite.
    print.append('<h2>Time Left: <span id="clock">120</span></h2>');

    //prints the button to mark completion of the quiz
    print.append('<button type="button" id="finish">Finished!</button>')

    //Countdown for the quiz begins
    countdown();
})

//This event is called upon clicking the finish button during the games run.
//Stops the timer to prevent the endgame function from running a second time,
//signals the end of the game
$("#finish").on("click", function() {
    clearInterval(intervalId);
    endGame()
})