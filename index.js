
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
randomColor();

// Make An Array Which Stores THe User Colors Clicked By The User 

var userSequence = [];

// Add Event Listeners To All The Buttons With jQuery Using The Mutual Class "btn"

$(".btn").on("click", function (e){
    userSequence.push(e.target.id);
    console.log(e.target.id);

    // Compare sequence Array And userSequence Array Using An If Statement And If They Match Call randomColor();

    var sequenceToString = sequence.toString();
    var userSequenceToString = userSequence.toString();
    if (sequenceToString === userSequenceToString){
        $("#" + e.target.id).fadeOut(50).fadeIn(50);
        setTimeout (
            function (){
                randomColor();
            }, 300
        )
        console.log("You Won!");
    } else {
        userSequence = [];
        sequence = [];
        $("#" + e.target.id).addClass("pressed");
        setTimeout(
            function () {
                $("#" + e.target.id).removeClass("pressed")
            }, 100
        );
        setTimeout(
            function (){
                randomColor();
            }, 300
        )
    }
})