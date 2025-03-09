// for mouse click

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  // if .addEventListener("type" , here if function will call this is callback function)
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    let buttonInnerHtml = this.innerHTML; // "this" keyword will show the which button is pressed.

    buttonAnimaton(buttonInnerHtml);

    switch (buttonInnerHtml) {
      case "w":
        var crash = new Audio("./sounds/crash.mp3");
        crash.play();
        break;

      case "a":
        var kickBass = new Audio("./sounds/kick-bass.mp3");
        kickBass.play();
        break;

      case "s":
        var snare = new Audio("./sounds/snare.mp3");
        snare.play();
        break;

      case "d":
        var tom1 = new Audio("./sounds/tom-1.mp3");
        tom1.play();
        break;

      case "j":
        var tom2 = new Audio("./sounds/tom-2.mp3");
        tom2.play();
        break;

      case "k":
        var tom3 = new Audio("./sounds/tom-3.mp3");
        tom3.play();
        break;

      case "l":
        var tom4 = new Audio("./sounds/tom-4.mp3");
        tom4.play();
        break;

      default:
        console.log(button.innerHTML);
        break;
    }
  });
}

// for keyboard click

document.addEventListener("keydown", function (event) {
  let keyPressed = event.key; // "event" keyword is show which key is pressed BY keyboard.

  buttonAnimaton(keyPressed);

  switch (keyPressed) {
    case "w":
      var crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;

    case "a":
      var kickBass = new Audio("./sounds/kick-bass.mp3");
      kickBass.play();
      break;

    case "s":
      var snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;

    case "d":
      var tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;

    case "j":
      var tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;

    case "k":
      var tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;

    case "l":
      var tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;

    default:
      console.log(keyPressed);
      break;
  }
});

function buttonAnimaton(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  // Remove "pressed" class after 1 second (1000 milliseconds)
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
