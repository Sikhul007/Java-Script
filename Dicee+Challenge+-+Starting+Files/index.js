// for player 1
const randomNumber1 = Math.floor(Math.random() * 6) + 1;
const imagePath1 = `./images/dice${randomNumber1}.png`;
document.querySelector(".img1").src = imagePath1;

//for player 2
const randomNumber2 = Math.floor(Math.random() * 6) + 1;
const imagePath2 = `./images/dice${randomNumber2}.png`;
document.querySelector(".img2").src = imagePath2;

if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").textContent = "📍 It's a tie!";
} else if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = "🥇 Player 1 wins";
} else {
  document.querySelector("h1").textContent = "Player 2 wins 🥇";
}
