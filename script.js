// Creating an array for button colors
var buttonColours = ["green", "red", "blue", "yellow"];

// Creating arrays to store user choices and the game pattern
var userClickedPattern = [];
var gamePattern = [];

// Game state variables
var started = false;
var level = 0;
var currentScore = 0;
var highestScore = 0;
var difficultyIncrease = 500;

// Event listener for keydown events to start the game or handle keypresses
$(document).on('keydown', function(event) {
    if (event.key === "Control" && !started) {
        playAudio("gameStart");
        setTimeout(function() {
            $('#currentScore').text(`Current Score: ${currentScore}`);
            $("h1").text("Level " + level);
            nextSequence();
        }, 700);
        started = true;
    } else if (["j", "d", "k", "f"].includes(event.key)) {
        handleKeyPress(event.key);
    }
});

$('#start-btn').on('click', function(event) {
    if (!started) {
        playAudio("gameStart");
        setTimeout(function() {
            $('#currentScore').text(`Current Score: ${currentScore}`);
            $("h1").text("Level " + level);
            nextSequence();
        }, 700);
        started = true;
    }
});
$(document).ready(function() {
    $('#difficulty-toggle').addClass('easy').text('Easy');
});

// Function to handle key presses and map keys to colors
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

// Event listener for button clicks
$('.btn').on('click', function() {
    var userChosenColor = this.id;
    userClickedPattern.push(userChosenColor);

    animatePress(userChosenColor);
    playAudio(userChosenColor);
    checkAnswer(userClickedPattern.length - 1);
});

// Function to generate the next sequence in the game pattern
function nextSequence() {
    userClickedPattern = [];

    level = level + 1;
    currentScore = level * 10;
    $('h1').text(`Level ${level}`);

    var randomizer = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColours[randomizer];
    gamePattern.push(randomChosenColor);
    //this if the statement to increase difficulty
    if ($('#difficulty-toggle').hasClass('hard') && level % 2 === 0) {
        if (difficultyIncrease > 50) { difficultyIncrease = difficultyIncrease - 50; }
    }
    // Play the sequence with a delay between each element
    for (var i = 0; i < gamePattern.length; i++) {
        (function(index) {
            setTimeout(function() {
                $("#" + gamePattern[index]).fadeOut(100).fadeIn(100);
                playAudio(gamePattern[index]);
            }, difficultyIncrease * index); // Delay of 500ms between each element
        })(i);
    }
}

// Function to check the user's answer against the game pattern
function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

        if (userClickedPattern.length === gamePattern.length) {
            $('#currentScore').text(`Current Score: ${currentScore}`);

            setTimeout(function() {
                nextSequence();
            }, 1000);
        }
    } else {
        if (highestScore < currentScore) {
            highestScore = currentScore - 10;
        }
        $('#highestScore').text('Highest Score: ' + highestScore);
        playAudio("wrong");
        $("body").addClass("gameOver");
        $("h1").text("Game Over, Press Ctrl to restart");
        $(".start-btn").text("Press to Restart");
        setTimeout(function() {
            $("body").removeClass("gameOver");
        }, 300);

        startOver();
    }
}

// Function to reset the game variables and restart the game
function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
    currentScore = 0;
    difficultyIncrease = 500;
}

// Function to animate button presses
function animatePress(currentColor) {
    $("#" + currentColor).fadeOut(100).fadeIn(100);
    setTimeout(function() {
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}

// Function to play audio based on the color or event
function playAudio(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

//Function to toggle difficulty button 
function toggleDifficulty() {
    let button = $('#difficulty-toggle');
    if (button.hasClass('easy')) {
        button.removeClass('easy').addClass('hard').text('Hard');
    } else {
        button.removeClass('hard').addClass('easy').text('Easy');

    }
}