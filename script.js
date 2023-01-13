const playerText = document.querySelector('#playerText');
const botText = document.querySelector('#botText');
const resultText = document.querySelector('#resultText');
const choiceBtns = document.querySelectorAll('.choiceBtn');

let player;
let bot;
let result;

choiceBtns.forEach(button => button.addEventListener("click", () => {

    player = button.textContent;
    botChoice();
    playerText.textContent = `Player Chose: ${player}`;
    botText.textContent = `Bot Chose: ${bot}`;
    resultText.textContent = checkWinner();

}));

function botChoice() {
    let randomNum = Math.floor(Math.random() * 3)+1;
    switch (randomNum) {
        case 1:
            bot = "Rock";
            break;
        case 2:
            bot = "Paper";
            break;
        case 3:
            bot = "Scissors"
            break;
    }
}

function checkWinner() {
    if (player == bot) {
        return "Draw!";
    }
    else if (bot == "Rock") {
        return (player == "Paper") ? "You Win!" : "You Lose!";
    }
    else if (bot == "Paper") {
        return (player == 'Scissors') ? "You Win!" : "You Lose!";
    }
    else if (bot == "Scissors") {
        return (player == "Rock") ? "You Win!" : "You Lose!";
    }
}