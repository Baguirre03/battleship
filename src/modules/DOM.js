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
                <div class="ships-display user"></div>
            </div>
            <div class="section-holder">
                <div class="player-name"></div>
                <div class="board" id="bot-board"></div>
                <div class="ships-display robot"></div>
            </div>
        </div>
    </body>
    `;
}

const playerShips = [
    Ship(2, "Destroyer"),
    Ship(3, "Submarine"),
    Ship(3, "Cruiser"),
    Ship(4, "Battleship"),
    Ship(5, "Carrier"),
];

const user = Player("user");
const robot = Player("robot");
let currentShip = playerShips[0];
let currentDirection = "vertical";
let placedShips = false;

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

function removeChildren(removeFrom) {
    while (removeFrom.firstChild) {
        removeFrom.removeChild(removeFrom.firstChild);
    }
}

function sunkShip(player, ship) {
    if (player.game.sunkShipsArray.includes(ship)) return;
    player.game.sunkShipsArray.push(ship);

    const notif = document.createElement("div");
    notif.classList.add("notification");
    notif.textContent = `${ship.name} has been sunk!`;
    document.body.appendChild(notif);
    setTimeout(() => {
        document.body.removeChild(notif);
    }, 3000);
}

function updateShips(playerOrUser) {
    const ships = playerOrUser.game.shipsArray;
    const display = document.querySelector(
        `.ships-display.${playerOrUser.playerName}`,
    );
    removeChildren(display);
    ships.forEach((ship) => {
        const div = document.createElement("div");
        div.classList.add("ship-container");
        display.appendChild(div);

        const name = document.createElement("h3");
        name.classList.add("ship-name");
        const hits = document.createElement("div");
        hits.classList.add("hits");
        const sunk = document.createElement("div");
        sunk.classList.add("sunk");
        const length = document.createElement("div");
        length.classList.add("length");

        div.append(name, hits, sunk, length);

        name.textContent = ship.name;
        hits.textContent = `Hits: ${ship.hits}`;
        sunk.textContent = `Sunk: ${ship.isSunk()}`;
        if (ship.isSunk()) {
            sunkShip(playerOrUser, ship);
            name.classList.add("sunk-ship-name");
        }
        length.textContent = `Length: ${ship.getLength()}`;
    });
}

function displayWinner(winner) {
    if (!document.querySelector(".winner-display")) {
        const display = document.createElement("div");
        display.classList.add("winner-display");
        document.body.appendChild(display);
        display.textContent = `${winner.playerName} has won the game!`;
    }
}

function checkWinner() {
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
    if (
        gameOver ||
        robot.game.checkIfAlreadyClicked(
            cell.dataset.cordOne,
            cell.dataset.cordTwo,
        )
    ) {
        return;
    }
    if (user.takeTurn(robot, cell.dataset.cordOne, cell.dataset.cordTwo)) {
        cell.classList.add("hit-ship");
    } else {
        user.switchTurn();
        robot.aiMoves(user);
        cell.classList.add("miss");
    }

    updateShips(user);
    updateShips(robot);
}

function gameLoop() {
    let gameOver = false;

    user.switchTurn();
    robot.game.placeRobotShips();

    displayGameBoards(user.game.board, "#user-board", "user");
    displayGameBoards(robot.game.board, "#bot-board", "bot");

    const botBoard = document.querySelectorAll(".bot");
    botBoard.forEach((cell) => {
        cell.addEventListener("click", () => {
            if (!placedShips) {
                return;
            }
            if (user.turn === false) {
                return;
            }
            gameSequence(cell, gameOver);
            if (checkWinner(robot, user)) {
                gameOver = true;
            }
        });
    });
}

function advanceShipArray() {
    const index = playerShips.indexOf(currentShip);
    currentShip = playerShips[index + 1];
}

function addClasses(cell, classToAdd, addOrRemove) {
    const cords = user.game.findCords(
        currentShip,
        cell.dataset.cordOne,
        cell.dataset.cordTwo,
        currentDirection,
    );
    cords.forEach((addCord) => {
        if (currentDirection === "horizontal") {
            const hightlight = document.querySelector(
                `[data-cord-one="${addCord}"][data-cord-two="${cell.dataset.cordTwo}"]`,
            );
            hightlight.classList[addOrRemove](classToAdd);
        }
        if (currentDirection === "vertical") {
            const hightlight = document.querySelector(
                `[data-cord-one="${cell.dataset.cordOne}"][data-cord-two="${addCord}"]`,
            );
            hightlight.classList[addOrRemove](classToAdd);
        }
    });
}

function cellEventListers(cell) {
    cell.addEventListener("mouseenter", () => {
        if (placedShips) return;
        addClasses(cell, "hovered", "add");
    });

    cell.addEventListener("mouseleave", () => {
        if (placedShips) return;
        addClasses(cell, "hovered", "remove");
    });

    cell.addEventListener("click", () => {
        const deselect = document.querySelectorAll(".row.user");
        deselect.forEach((deselectThis) =>
            deselectThis.classList.remove("hovered"),
        ); //   removes hovered class from last placed ship

        if (placedShips) return;
        if (
            !user.game.placeShip(
                currentShip,
                cell.dataset.cordOne,
                cell.dataset.cordTwo,
                currentDirection,
                user.game.board,
            )
        )
            return;
        if (currentShip === playerShips[4]) {
            placedShips = true;
        }
        addClasses(cell, "ship-placed-there", "add");
        advanceShipArray();
    });
}

function placeShips() {
    document.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        const deselect = document.querySelectorAll(".row.user");
        deselect.forEach((cell) => cell.classList.remove("hovered"));

        currentDirection === "vertical"
            ? (currentDirection = "horizontal")
            : (currentDirection = "vertical");
        addClasses(e.target, "hovered", "add");
    });

    const cells = document.querySelectorAll(".row.user");
    cells.forEach((cell) => cellEventListers(cell));
}

export { generateStarterHTML, gameLoop, placeShips };
