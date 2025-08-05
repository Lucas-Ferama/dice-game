


function rollDice() {
  if (randomnumber1 > randomnumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
  } else if (randomnumber1 < randomnumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
  } else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
}

function animateDice (imgElement) {
    imgElement.classList.add("roll-animation");

    setTimeout(() => {
        imgElement.classList.remove("roll-animation");
    }, 1000);
};

const img1 = document.querySelector(".img1");
// Add event listeners immediately
document.querySelector(".img1").addEventListener("click", () => {
    animateDice(img1);
  // Generate a random number between 1 and 6
  randomnumber1 = Math.floor(Math.random() * 6) + 1;
  document.querySelector(".img1").setAttribute("src", "./images/dice" + randomnumber1 + ".png");
  rollDice();
});
const img2 = document.querySelector(".img2");           
// Add event listeners immediately
document.querySelector(".img2").addEventListener("click", () => {
    animateDice(img2);
  randomnumber2 = Math.floor(Math.random() * 6) + 1;
  document.querySelector(".img2").setAttribute("src", "./images/dice" + randomnumber2 + ".png");
  rollDice();
});

