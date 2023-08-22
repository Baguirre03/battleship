/* eslint-disable no-unused-expressions */
/* eslint-disable no-param-reassign */
import Player from "./player";
import Ship from "./ship";

function generateStarterHTML() {
    document.body.innerHTML = `
    <head>
        <div class="title">BattleShip</div>
    </head>
    <body>
        <div class="main-container">
            <div class="section-holder">
                <div class="player-name"></div>
                <div class="board" id="user-board"></div>
            </div>
            <div class="section-holder">
                <div class="player-name"></div>
                <div class="board" id="bot-board"></div>
            </div>
        </div>
    </body>
    `;
}

const playerShips = [
    Ship(1, "one"),
    Ship(2, "two"),
    Ship(3, "three"),
    Ship(4, "four"),
    Ship(5, "five"),
];

const user = Player("user");
const robot = Player("robot");
let currentShip = playerShips[0]
let currentDirection = "vertical"
let placedShips = false

function displayGameBoards(boardObj, boardSelector, secondClass) {
    const boardDisplay = document.querySelector(boardSelector);
    for (let i = 1; i < boardObj.length; i += 1) {
        const divOne = document.createElement("div");
        divOne.classList.add("column");
        boardDisplay.appendChild(divOne);
        for (let j = 1; j < boardObj[i].length; j += 1) {
            const divTwo = document.createElement("div");
            divTwo.classList.add("row");
            divTwo.classList.add(secondClass);
            
            divOne.appendChild(divTwo);
            divTwo.dataset.cordOne = j;
            divTwo.dataset.cordTwo = i;
        }
    }
}

function displayWinner(winner) {
    if (!document.querySelector(".winner-display")) {
        const display = document.createElement("div");
        display.classList.add("winner-display");
        document.body.appendChild(display);
        display.textContent = `${winner.playerName} has one the game!`;
    }
}

function checkWinner(robot, user) {
    if (robot.game.allShipsSunk()) {
        user.winner = true;
        displayWinner(user);
        return true;
    }
    if (user.game.allShipsSunk()) {
        robot.winner = true;
        displayWinner(robot);
        return true;
    }
    return false;
}


function gameSequence(cell, gameOver) {
    if (gameOver || robot.game.checkIfAlreadyClicked(cell.dataset.cordOne, cell.dataset.cordTwo)) {
        return;
    } 
    if (user.takeTurn(robot, cell.dataset.cordOne, cell.dataset.cordTwo)) {
        cell.classList.add("hit-ship");
    } else {
        user.switchTurn()
        robot.aiMoves(user);
        cell.classList.add("miss");
    }
}

function gameLoop() {
    let gameOver = false;

    user.switchTurn()
    robot.game.placeRobotShips();

    displayGameBoards(user.game.board, "#user-board", "user");
    displayGameBoards(robot.game.board, "#bot-board", "bot");

    const botBoard = document.querySelectorAll(".bot");
    botBoard.forEach((cell) => {
        cell.addEventListener("click", () => {
            if(user.turn === false) {
                console.log('user cannot go rn')
                return
            }
            gameSequence(cell, gameOver);
            if (checkWinner(robot, user)) {
                gameOver = true;
            }
        });
    });
}

function advanceShipArray() {
    const index = playerShips.indexOf(currentShip)
    currentShip = playerShips[index + 1]
}

function placeShips() {
    const cells = document.querySelectorAll('.row.user')
    cells.forEach((cell) => {
        cell.addEventListener('mouseenter', () => {
            cell.classList.add('hovered')
        })
        cell.addEventListener('mouseleave', () => {
            cell.classList.remove('hovered')
        })
        cell.addEventListener('click', () => {
            if(placedShips) return

            user.game.placeShip(currentShip, cell.dataset.cordOne, cell.dataset.cordTwo, currentDirection, user.game.board)
            if(currentShip === playerShips[4]) {
                placedShips = true
            }

            advanceShipArray()
        })
    })
}



export { generateStarterHTML, gameLoop, placeShips };
