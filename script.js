//Creating Array for Colors
var buttonColours = ["green", "red", "blue", "yellow"];
//creating Array for user choices
var userClickedPattern = [];
var gamePattern = [];

var started = false;
var level = 0;
var currentScore = 0;
var highestScore = 0;

//console.log(gamePattern);

//Choosing Buttons with ranomChosenColor 
// 
$(document).on('keydown', function(event) {
    if (event.key === "Control" && !started) {
        playAudio("gameStart");
        $('#currentScore').text(`Current Score: ${currentScore}`);
        $("h1").text("Level " + level);
        nextSequence();

        started = true;
    }
});
$(document).on('keydown', function(event) {
    if (event.key === "Control" && !started) {
        nextSequence();
        started = true;
    } else if (["j", "d", "k", "f"].includes(event.key)) {
        handleKeyPress(event.key);
    }
});

function handleKeyPress(key) {
    var keyToColor = {
        "j": "red",
        "f": "yellow",
        "k": "blue",
        "d": "green"
    };

    var userChosenColor = keyToColor[key];
    userClickedPattern.push(userChosenColor);

    animatePress(userChosenColor);
    playAudio(userChosenColor);
    checkAnswer(userClickedPattern.length - 1);
}


//Handling both button click and keypress events
$('.btn').on('click', function() {

    var userChosenColor = this.id;
    userClickedPattern.push(userChosenColor);

    animatePress(userChosenColor);
    playAudio(userChosenColor);
    checkAnswer(userClickedPattern.length - 1);
});


function nextSequence() {
    userClickedPattern = [];

    level++;
    currentScore = (level * 10);
    $('h1').text(`Level ${level}`);

    var randomizer = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColours[randomizer];
    gamePattern.push(randomChosenColor);
    for (var i = 0; i < gamePattern.length; i++) {
        (function(index) {
            setTimeout(function() {
                $("#" + gamePattern[index]).fadeOut(100).fadeIn(100);
                playAudio(gamePattern[index]);
            }, 500 * index); // Delay of 500ms between each element
        })(i);
    }

}



function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        $('#currentScore').text(`Current Score: ${currentScore}`);
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function() {
                nextSequence();
            }, 1000);
        }
    } else {
        if (highestScore < currentScore) {
            highestScore = currentScore;
        }
        $('#highestScore').text('Highest Score: ' + highestScore);
        playAudio("wrong");
        $("body").addClass("gameOver");
        $("h1").text("Game Over, Press Ctrl to restart");
        setTimeout(function() {
            $("body").removeClass("gameOver");
        }, 300);

        startOver();
    }
}


function startOver() {

    level = 0;
    gamePattern = [];
    started = false;
    currentScore = 0;
}

//randomizer function rand between 0 and 3



function animatePress(currentColor) {
    $("#" + currentColor).fadeOut(100).fadeIn(100);
    setTimeout(function() {
        $("#" + currentColor).removeClass("pressed");
    }, 100);

}


//function to Play Audio with Switch statements
function playAudio(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}