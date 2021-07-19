
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
    return randomColor;
}

// Make An Array Which Stores THe User Colors Clicked By The User 

var userSequence = [];

// Add A Key-Down Event To Document

$(document).on("keydown", function (){
    if (sequence.length == 0) {

        // Make The Key-Down Event Call randomColor(); Function

        randomColor();

        // Everytime Key-Down Event Is Called Reset "#level-title" To Level Counter Using sequence.length

        $("#level-title").text("Level " + sequence.length);

    }
})

// Add Event Listeners To All The Buttons With jQuery Using The Mutual Class "btn"

$(".btn").on("click", function (e) {
    userSequence.push(e.target.id);
    console.log(e.target.id);

    // Compare sequence Array And userSequence Array Using An If Statement And If They Match Call randomColor();

    var sequenceToString = sequence.toString();
    var userSequenceToString = userSequence.toString();
    if (sequenceToString == userSequenceToString) {
        $("#" + e.target.id).fadeOut(50).fadeIn(50);
        $("#level-title").text("Level " + sequence.length);
        playSound(e.target.id);
        setTimeout(
            function () {
                randomColor();
            }, 300
        )
    } else {
        sequence = [];
        userSequence = [];
        $("#" + e.target.id).addClass("pressed");
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press Any Key To Restart");
        playSound("wrong");
        setTimeout(
            function () {
                $("#" + e.target.id).removeClass("pressed");
            }, 100
        )
        setTimeout(
            function () {
                $("body").removeClass("game-over");
            }, 200
        )
    }
}
)

// Make A Function With The Name sound With The Parameter clip To Play The Sounds

function playSound (clip){
    var sound = new Audio("sounds/" + clip + ".mp3");
    sound.play();
}