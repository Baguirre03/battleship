/* eslint-disable no-restricted-syntax */
export default function Gameboard() {
    const board = iniatlizeBoard();

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

    function placeShipIsOutOfBounds(shipObj, cordOne, cordTwo, direction) {
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
            newCords.push(cordTwo);
            for (let i = 1; i < shipObj.getLength(); i += 1) {
                newCords.push(cordTwo + i);
            }
        }
        if (direction === "vertical") {
            newCords.push(cordOne);
            for (let i = 1; i < shipObj.getLength(); i += 1) {
                newCords.push(cordOne + i);
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
                if (boardCopy[cordOne][cordinate] != null) {
                    return true;
                }
            }
        }
        if (direction === "vertical") {
            for (const cordinate of additonalCords) {
                if (boardCopy[cordinate][cordTwo] != null) {
                    return true;
                }
            }
        }
        return false;
    }

    function placeShip(shipObj, cordOne, cordTwo, direction) {
        if (placeShipIsOutOfBounds(shipObj, cordOne, cordTwo, direction)) {
            return false;
        }
        const cords = findCords(shipObj, cordOne, cordTwo, direction);
        if (
            checkIfCordsHasShip(cordOne, cordTwo, direction, cords, this.board)
        ) {
            return false;
        }
        cords.forEach((cord) => {
            if (direction === "horizontal") {
                this.board[cordOne][cord] = shipObj;
            }
            if (direction === "vertical") {
                this.board[cord][cordTwo] = shipObj;
            }
        });
    }

    return {
        board,
        placeShip,
    };
}
