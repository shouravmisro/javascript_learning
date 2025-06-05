const genrateRandomNumber = document.getElementById("generate-button");
const randomNumber = document.getElementById("random-number");
genrateRandomNumber.addEventListener("click", () => {
  const randomNum = Math.floor(Math.random() * 1000) + 1;
  randomNumber.textContent = `${randomNum}`;
});

const resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", () => {
  randomNumber.textContent = "0";
  genrateRandomNumber.disabled = false;
});
