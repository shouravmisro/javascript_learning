const btnelement = document.querySelector("button");
const spanElement = document.getElementById
("updateName");

btnelement.onclick = function () {
    const yourname = prompt("Enter your name");
    spanElement.textContent = yourname;
}
