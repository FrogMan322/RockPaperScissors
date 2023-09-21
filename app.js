const computerChouse = ["rock", "paper", "scissors"];
const btns = Array.from(document.querySelectorAll(".choise__container"));
const pcRandom = () => {
  const random = Math.floor(Math.random() * computerChouse.length);
  return computerChouse[random];
};
let playerScore = 0;
let computerScore = 0;
btns.forEach((e) => {
  e.addEventListener("click", (event) => {
    const scoreBoardPc = document.getElementById("pc__score");
    const scoreBoardPlayer = document.getElementById("player__score");
    const playerChose = event.target.dataset.choise;
    const computerChose = pcRandom();

    console.log(`Player:${playerChose}, PC:${computerChose}`);
    if (
      (playerChose === "rock" && computerChose === "scissors") ||
      (playerChose === "paper" && computerChose === "rock") ||
      (playerChose === "scissors" && computerChose === "paper")
    ) {
      playerScore++;
      alert("Player wins");
    } else if (
      (playerChose === "rock" && computerChose === "rock") ||
      (playerChose === "paper" && computerChose === "paper") ||
      (playerChose === "scissors" && computerChose === "scissors")
    ) {
      alert("Draw");
    } else {
      computerScore++;
      alert("Computer wins");
    }

    scoreBoardPc.textContent = `PC Score:${computerScore}`;
    scoreBoardPlayer.textContent = `Player Score:${playerScore}`;
  });
});
