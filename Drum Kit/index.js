const drums = document.querySelectorAll(".drum");
for (let i = 0; i<drums.length; i++) {
  drums[i].addEventListener("click", handleClick);
  }

function handleClick() {
    makeSound(this.innerHTML);
    animation(this.innerHTML);
}

document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  animation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
    break;
    case "a":
      var kickbass = new Audio("sounds/kick-bass.mp3");
      kickbass.play();
    break;
    case "s":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
    break;
    case "d":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
    break;
    case "f":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
    break;
    case "g":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
    break;
    case "h":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
    break;
    default: console.log(key);
}
}

function animation(key) {
   var pressedButton = document.querySelector("." + key);
   pressedButton.classList.add("pressed");

   setTimeout(function() {
     pressedButton.classList.remove("pressed");
   }, 100);
}
