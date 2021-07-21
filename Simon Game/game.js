var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickPattern = [];
var level = 0;
var started = false;

function nextSequence() {
  userClickPattern = [];
  level++;
  $("#level-title").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] == userClickPattern[currentLevel]) {
      if (userClickPattern.length == gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    } else {
      playSound("wrong");
      $("body").addClass("game-over");
      $("#level-title").text("Game Over");
      $("#subtext").text("Press any key to Restart");
      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);
      startOver();
    }
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}

$(document).keypress(function() {
  if (started == false) {
    $("#level-title").text("Level " + level);
    $("#subtext").text("");
    nextSequence();
    started = true;
  }
});

$(".btn").click(function() {
  var userChosenColour = $(this).attr("id");
  userClickPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickPattern.length-1);
});
