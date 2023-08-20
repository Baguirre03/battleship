import Player from "./player";
import Ship from "./ship";

function generateStarterHTML() {
    document.body.innerHTML = `
    <head>
        <div class="title">BattleShip</div>
    </head>
    <body>
        <div class="section-holder">
            <div class="player-name"></div>
            <div class="board" id="user-board"></div>
        </div>
        <div class="section-holder">
            <div class="player-name"></div>
            <div class="board" id="bot-board"></div>
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
}

function displayGameBoards(boardObj, boardSelector) {
    const boardDisplay = document.querySelector(boardSelector);
    console.log(boardObj);
    for (let i = 1; i < boardObj.length; i += 1) {
        const divOne = document.createElement("div");
        divOne.classList.add("column");
        boardDisplay.appendChild(divOne);
        for (let j = 1; j < boardObj[i].length; j += 1) {
            const divTwo = document.createElement("div");
            divTwo.classList.add("row");
            divOne.appendChild(divTwo);
            divTwo.textContent = [j, i];
        }
    }
}

function addEventListeners() {}

export { generateStarterHTML, addEventListeners, gameLoop };
