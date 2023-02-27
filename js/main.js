const startButton = document.querySelector("#start-button");
const userName = document.querySelector("#username");

if (localStorage.getItem("username") === null) {
    startButton.disabled = true;
} else {
    userName.value = localStorage.getItem("username");
    startButton.disabled = false;
}

userName.addEventListener("keyup", () => {
    if (userName.value.length >= 3)
        startButton.disabled = false;
    else
        startButton.disabled = true;
});

startButton.addEventListener("click", () => {
    localStorage.setItem("username", userName.value);
    window.location.href = "game.html";
    console.log(localStorage.getItem("username"));
});