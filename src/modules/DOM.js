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

function gameLoop() {
    const user = Player("user");
    const robot = Player("robot");
    user.switchTurn();

    robot.game.placeRobotShips();
    user.game.placeShip(playerShips[0], 1, 1, "vertical", user.game.board);
    user.game.placeShip(playerShips[1], 3, 5, "horizontal", user.game.board);
    user.game.placeShip(playerShips[2], 2, 4, "vertical", user.game.board);
    user.game.placeShip(playerShips[3], 9, 3, "vertical", user.game.board);
    user.game.placeShip(playerShips[4], 10, 3, "vertical", user.game.board);

    displayGameBoards(user.game.board, "#user-board");
    displayGameBoards(robot.game.board, "#bot-board", "bot");

    const botBoard = document.querySelectorAll(".bot");
    botBoard.forEach((cell) => {
        cell.addEventListener("click", () => {
            if (
                robot.game.checkIfAlreadyClicked(
                    cell.dataset.cordOne,
                    cell.dataset.cordTwo,
                )
            ) {
                return;
            }
            gameSequence(cell, robot, user);
            if (robot.game.allShipsSunk() || user.game.allShipsSunk()) {
                console.log("game one");
            }
        });
    });
}

function gameSequence(cell, robot, user) {
    if (user.takeTurn(robot, cell.dataset.cordOne, cell.dataset.cordTwo)) {
        cell.classList.add("hit-ship");
    } else {
        cell.classList.add("miss");
    }
    robot.aiMoves(user);
}

export { generateStarterHTML, gameLoop };
