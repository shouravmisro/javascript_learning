const genrateRandomNumber = document.getElementById("generate-button");
const randomNumber = document.getElementById("random-number");
genrateRandomNumber.addEventListener("click", () => {
  const randomNum = Math.floor(Math.random() * 1000) + 1;
  randomNumber.textContent = `${randomNum}`;
});

const resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", () => {
  randomNumber.textContent = "From 1 to 1000";
  genrateRandomNumber.disabled = false;
});

const passbox = document.getElementById("password");
const rmp = document.getElementById("rmp");

const genaratepassword = () => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+#$%^&";
  let password = "";
  for (let i = 0; i < 12; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  passbox.value = password;
};
rmp.addEventListener("click", genaratepassword);

const copyButton = document.getElementById("copy");
copyButton.addEventListener("click", () => {
  passbox.select();
  document.execCommand("copy");
  alert("Password copied to clipboard!");
});

const resetButton2 = document.getElementById("reset-button2");
resetButton2.addEventListener("click", () => {
  passbox.value = "";
});
