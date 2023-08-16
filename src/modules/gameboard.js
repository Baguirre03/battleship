export default function Gameboard() {
    const board = iniatlizeBoard();

    function iniatlizeBoard() {
        const holder = [];
        for (let i = 1; i <= 10; i++) {
            holder[i] = [];
            for (let j = 1; j <= 10; j++) {
                holder[i][j] = j;
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
            for (let i = 0; i <= shipObj.getLength(); i += 1) {
                newCords.push(cordTwo + i);
            }
        }
        if (direction === "vertical") {
            newCords.push(cordOne);
            for (let i = 0; i <= shipObj.getLength(); i += 1) {
                newCords.push(cordOne + i);
            }
        }
        return newCords;
    }

    function placeShip(shipObj, cordOne, cordTwo, direction) {
        if (placeShipIsOutOfBounds(shipObj, cordOne, cordTwo, direction)) {
            return false;
        }
        const cords = findCords(shipObj, cordOne, cordTwo, direction);
        cords.forEach((cord) => {
            if (direction === "horizontal") {
                this.board[cord][cordTwo] = shipObj;
            }
            if (direction === "vertical") {
                this.board[cordOne][cord] = shipObj;
            }
        });
        return this.board;
    }

    function getCords(cordOne, cordTwo) {
        return this.board[cordOne][cordTwo];
    }

    return {
        board,
        placeShip,
        getCords,
    };
}
