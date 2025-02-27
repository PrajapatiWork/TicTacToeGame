let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".resetBtn");
let newGameBtn = document.querySelector(".newGameBtn");
let msgContainer = document.querySelector(".msgContainer");
let msg = document.querySelector("#msg");

let playerx = true; // player X and player O 
const winPaterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
const resetGame = () => {
    playerx = true;
    enableAllBox();
    msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {

        if (playerx == true) {
            box.innerText = "X";
            playerx = false;
        } else {
            box.innerText = "O";
            playerx = true;
        }
        box.disabled = true;
        checkWinner();

    });
});
const disableAllBox = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};
const enableAllBox = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};
const showWinner = (winner) => {
    msg.innerText = `Congratulation! The winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableAllBox();
};
const checkWinner = () => {
    for (let pattern of winPaterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val);
            }
        }
    }
}
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);