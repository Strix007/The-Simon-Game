
// Make An Array With All The Colors

var colors = ["green", "red", "blue", "yellow"];

// Make An Array With The Random Colors And Call It Sequence

var sequence = [];

// Make A Function Which Calls A Random Color From The Color Array

function randomColor (){
    var randomNum = Math.floor(Math.random() * 4);
    var randomColor = colors[randomNum];
    sequence.push(randomColor);
    $("#" + randomColor).fadeOut(50).fadeIn(50);
    playSound(randomColor);
    return randomColor;
}

// Make An Array Which Stores THe User Colors Clicked By The User 

var userSequence = [];

// Make A Function With The Name sound With The Parameter clip To Play The Sounds

function playSound(clip) {
    var sound = new Audio("sounds/" + clip + ".mp3");
    sound.play();
}

// Make A Function For When The Game Is Over

function gameOver (){
    sequence = [];
    userSequence = [];
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(
        function () {
            $("body").removeClass("game-over");
        }, 300
    )
    $("#level-title").text("Game Over, Press Any Key To Restart");
}

// Make A Function For The Wrong Press 

function wrongPress (color){
    $("#" + color).addClass("pressed");
    setTimeout (
        function (){
            $("#" + color).removeClass("pressed");
        }, 200
    )
}

// Add A Key-Down Event To Document

$(document).on("keydown", function (){
    if (sequence.length == 0) {

        // Make The Key-Down Event Call randomColor(); Function

        randomColor();

        // Everytime Key-Down Event Is Called Reset "#level-title" To Level Counter Using sequence.length

        $("#level-title").text("Level " + sequence.length);

    }
})

// Add Event Listeners To All The Buttons With jQuery Using The Mutual Class "btn" And Set The Game Logic

$(".btn").on("click", function (e){
    userSequence.push(e.target.id);
    playSound(e.target.id);
    $("#" + e.target.id).fadeOut(50).fadeIn(50);
    if (sequence.length == userSequence.length){
        var sequenceToLength = sequence.toString();
        var userSequenceToLength = userSequence.toString();
        if (sequenceToLength == userSequenceToLength){
        $("#level-title").text("Level " + sequence.length);
            userSequence = [];
            setTimeout(
                function (){
                    randomColor();
                }, 300
            )
        } else {
            gameOver();
            wrongPress(e.target.id);
        }
    } else if (sequence[userSequence.length - 1] !== userSequence[userSequence.length - 1]){
        gameOver();
        wrongPress(e.target.id);
    }
}
)