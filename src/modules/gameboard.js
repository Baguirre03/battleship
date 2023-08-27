/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
/* eslint-disable no-use-before-define */
/* eslint-disable consistent-return */
/* eslint-disable prefer-const */
/* eslint-disable no-restricted-syntax */

import Ship from "./ship";

export default function Gameboard() {
    const board = iniatlizeBoard();
    let misses = 0;
    let missedCords = [];
    let hitCords = [];
    let allCords = [];
    let shipsArray = [];
    let sunkShipsArray = [];
    let lastShipHit = null;
    let sunkShips = 0;
    const ships = [
        Ship(2, "Destroyer"),
        Ship(3, "Submarine"),
        Ship(3, "Cruiser"),
        Ship(4, "Battleship"),
        Ship(5, "Carrier"),
    ];

    function iniatlizeBoard() {
        const holder = [];
        for (let i = 1; i <= 10; i += 1) {
            holder[i] = [];
            for (let j = 1; j <= 10; j += 1) {
                holder[i][j] = null;
            }
        }
        return holder;
    }

    function getMisses() {
        return this.misses;
    }

    function getSunkShips() {
        return this.sunkShips;
    }

    function checkIfShipIsOutOfBounds(shipObj, cordOne, cordTwo, direction) {
        if (
            direction === "horizontal" &&
            cordOne - 1 + shipObj.getLength() > 10
        ) {
            return true;
        }
        if (
            direction === "vertical" &&
            cordTwo - 1 + shipObj.getLength() > 10
        ) {
            return true;
        }
        return false;
    }

    function findCords(shipObj, cordOne, cordTwo, direction) {
        const newCords = [];
        if (direction === "horizontal") {
            newCords.push(cordOne);
            for (let i = 1; i < shipObj.getLength(); i += 1) {
                newCords.push(Number(cordOne) + i);
            }
        }
        if (direction === "vertical") {
            newCords.push(cordTwo);
            for (let i = 1; i < shipObj.getLength(); i += 1) {
                newCords.push(Number(cordTwo) + i);
            }
        }
        return newCords;
    }

    function checkIfCordsHasShip(
        cordOne,
        cordTwo,
        direction,
        additonalCords,
        boardCopy,
    ) {
        if (direction === "horizontal") {
            for (const cordinate of additonalCords) {
                if (boardCopy[cordinate][cordTwo] != null) {
                    return true;
                }
            }
        }
        if (direction === "vertical") {
            for (const cordinate of additonalCords) {
                if (boardCopy[cordOne][cordinate] != null) {
                    return true;
                }
            }
        }
        return false;
    }

    function placeShip(shipObj, cordOne, cordTwo, direction, board) {
        if (checkIfShipIsOutOfBounds(shipObj, cordOne, cordTwo, direction)) {
            return false;
        }

        const cords = findCords(shipObj, cordOne, cordTwo, direction);

        if (checkIfCordsHasShip(cordOne, cordTwo, direction, cords, board)) {
            return false;
        }

        cords.forEach((cord) => {
            if (direction === "horizontal") {
                board[cord][cordTwo] = shipObj;
            }
            if (direction === "vertical") {
                board[cordOne][cord] = shipObj;
            }
        });
        shipsArray.push(shipObj);
        return true;
    }

    function checkCordForAttack(cordOne, cordTwo, boardCopy) {
        const cordinate = boardCopy[cordOne][cordTwo];
        if (cordinate != null) {
            return boardCopy[cordOne][cordTwo]; // returns ship if there
        }
        return null;
    }

    function updateHits(ship, boardCopy) {
        ship.hit();
        if (ship.isSunk()) {
            boardCopy.sunkShips += 1;
        }
    }

    function recieveAttack(cordOne, cordTwo) {
        this.allCords.push([cordOne, cordTwo]);
        const ship = checkCordForAttack(cordOne, cordTwo, this.board);
        if (ship === null) {
            this.misses += 1;
            this.missedCords.push([cordOne, cordTwo]);
            this.board[cordOne][cordTwo] = "miss";
            return false;
        }
        this.lastShipHit = this.board[cordOne][cordTwo];
        this.hitCords.push([cordOne, cordTwo]);
        updateHits(ship, this.board);
        return true;
    }

    const isSunkShip = (ship) => ship.sunk;

    function allShipsSunk() {
        if (shipsArray.every(isSunkShip)) {
            return true;
        }
        return false;
    }

    function randomNumber() {
        let num = Math.floor(Math.random() * 10);
        if (num === 0) {
            return randomNumber();
        }
        return num;
    }

    function randomDirection() {
        let directions = ["vertical", "horizontal"];
        return directions[Math.floor(Math.random() * directions.length)];
    }

    function placeRobotShips() {
        ships.forEach((ship) => {
            placeShipsRobotRec(ship, this.board);
        });
    }

    function placeShipsRobotRec(ship, board) {
        if (
            placeShip(
                ship,
                randomNumber(),
                randomNumber(),
                randomDirection(),
                board,
            ) === false
        ) {
            placeShipsRobotRec(ship, board);
        }
    }

    function checkIfAlreadyClicked(cordOne, cordTwo) {
        for (let i = 0; i < allCords.length; i += 1) {
            if (cordOne === allCords[i][0] && cordTwo === allCords[i][1]) {
                return true;
            }
        }
        return false;
    }

    return {
        board,
        misses,
        placeShip,
        recieveAttack,
        getMisses,
        missedCords,
        shipsArray,
        sunkShips,
        allShipsSunk,
        getSunkShips,
        placeRobotShips,
        allCords,
        randomDirection,
        randomNumber,
        findCords,
        checkIfAlreadyClicked,
        sunkShipsArray,
        hitCords,
        lastShipHit,
        ships,
    };
}
