const buttons = document.querySelectorAll(".button");
const toggleButton = document.getElementById("toggle-rules");
const rulesSection = document.getElementById("rules-section");
const gameBoard = document.getElementById("game-board"); 

let count = 0;
let board = ["", "", "", "", "", "", "", "", ""];
const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Lignes
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Colonnes
    [0, 4, 8], [2, 4, 6]  // Diagonales
];

function checkWinner(player) {
    return winningCombinations.some(combination => {
        return combination.every(index => board[index] === player);
    });
}

function checkDraw() {
    return board.every(cell => cell !== "");
}

function resetGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    count = 0;
    buttons.forEach(button => {
        button.firstElementChild.src = ""; 
        button.removeAttribute("disabled");
        button.firstElementChild.classList.remove("image");
    });
    console.log("Jeu réinitialisé !");
}

buttons.forEach((button, index) => {
    button.addEventListener("click", function(event){
        count++;
        const currentPlayer = (count % 2 === 1) ? "Joueur 1" : "Joueur 2"; 

        if (currentPlayer === "Joueur 1") {
            button.firstElementChild.src = "img/cross.png"; 
        } else {
            button.firstElementChild.src = "img/circle.png"; 
        }
        
        button.setAttribute("disabled", ""); 
        button.firstElementChild.classList.add("image");

        board[index] = currentPlayer;

        if (checkWinner(currentPlayer)) {
            alert(`${currentPlayer} a gagné !`);
            resetGame();
        } else if (checkDraw()) { 
            alert("Match nul !");
            resetGame();
        }
    });
});
toggleButton.addEventListener("click", function() {
    if (rulesSection.classList.contains("hidden")) {
        rulesSection.classList.remove("hidden");
        rulesSection.classList.add("visible");
        toggleButton.textContent = "Cacher les règles du jeu"; 
        gameBoard.style.display = "none";

    } else {
        rulesSection.classList.remove("visible");
        rulesSection.classList.add("hidden");
        toggleButton.textContent = "Afficher les règles du jeu";
        gameBoard.style.display = "grid";
    }
});