//Creating Array for Colors
var buttonColours = ["green", "red", "blue", "yellow"];
//creating Array for user choices
var userClickedPattern = [];
var gamePattern = [];

var started = false;
var level = 0;

//console.log(gamePattern);

//Choosing Buttons with ranomChosenColor 
// 
$(document).keydown(function() {
    if (!started) {
        // $("h1").text("Level " + level);
        nextSequence();
        started = true;
    }
    // while (!started)
    //     if (event.key === "control") {
    //         nextSequence();
    //         started = true;
    //     }
    // } else if (event.key === "alt") {
    // }
});

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

    level = +1;
    $('h1').text(`Level ${level}`);
    var randomizer = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColours[randomizer];
    gamePattern.push(randomChosenColor);
    for (var i = 0; i < gamePattern.length; i++) {
        (function(index) {
            setTimeout(function() {
                $("#" + gamePattern[index]).fadeIn(100).fadeOut(100).fadeIn(100);
                playAudio(gamePattern[index]);
            }, 500 * index); // Delay of 500ms between each element
        })(i);
    }




}

//click event handler

// 


function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function() {
                nextSequence();
            }, 1000);
        }
    } else {
        playAudio("wrong");
        $("body").addClass("gameOver");
        $("h1").text("Game Over, Press Alt to restart");
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