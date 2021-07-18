
function roll_dice() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  document.querySelector(".img1").setAttribute("src","images/dice" + randomNumber1+ ".png");
  document.querySelector(".img2").setAttribute("src","images/dice" + randomNumber2+ ".png");

  text = document.querySelector("h1");
  if (randomNumber1 > randomNumber2) {
    text.textContent = "Player 1 Wins!";
  } else if (randomNumber2 > randomNumber1) {
    text.textContent = "Player 2 Wins!";
  } else {
    text.textContent = "Draw!";
  }
}
