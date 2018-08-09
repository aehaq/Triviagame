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

var khalidQuote = [
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

$( document ).ready(function() {

    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    var intervalId;
    var timeLeft =  90;
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
        if (timeLeft ===0) {
            clearInterval(intervalId);
            endGame();
        }
    }

    //This event covers the start of the game, upon click of the start button.
    $("#start").on("click", function() {
        //removes button and preps area for more content
        print.empty();

        //prints the countdown timer and provides an id for the decrement function to overwrite.
        print.append('<h2>Time Left: <span id="clock">90</span></h2>');

        //this for loop will print each of the questions one by one
        for (let i = 0; i < 10; i++) {

            print.append('<hr class="my-2"><p class="question">"' + quotes[i] + '"</p>');

            //once the question has been appended, we append the radio buttons
            //we are using conditionals to make sure the buttons are set with accurate IDs regarding their value.
            if (khalidQuote[i]) {
                print.append('<form>    <input type="radio" name="q'+i+'" value="right"> DJ Khaled    <input type="radio" name="q'+i+'" value="wrong"> US President </form>')
            } else {
                print.append('<form>    <input type="radio" name="q'+i+'" value="wrong"> DJ Khaled    <input type="radio" name="q'+i+'" value="right"> US President </form>')
            }
        }

        //prints the button to mark completion of the quiz
        print.append('<hr class="my-2"><input type="submit" value="Submit Answers" id="finish">');

        //This event is called upon clicking the finish button during the games run.
        //Stops the timer to prevent the endgame function from running a second time,
        //signals the end of the game
        $("#finish").on("click", function() {
            event.preventDefault()
            clearInterval(intervalId);
            endGame();
        })

        //Countdown for the quiz begins
        countdown();
    })

    //This function tells the game what to do when it ends.
    function endGame() {

        //Goes through each of the questions
        for (let i = 0; i < 10; i++) {

            var thisResult = $('input[name="q'+i+'"]:checked').val();

            //You can check the console log for which answers were correct or incorrect
            console.log(i + 1 +". " + thisResult)

            //totals the scores for the right, wrong, and unanswered
            if (thisResult === "right") {
                correct++;
            } else if (thisResult === "wrong") {
                incorrect++;
            } else {
                unanswered++;
            }
        }

        //clears the main container
        print.empty();
        
        //prints the results onto the screen
        print.append('<p> Answered Correctly: ' + correct + '</p>');
        print.append('<p> Answered Incorrectly: ' + incorrect + '</p>');
        print.append('<p> Left Unanswered: ' + unanswered + '</p>');
    }

});