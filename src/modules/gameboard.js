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

    function placeShip(shipObj, cordOne, cordTwo, direction) {
        if (shipIsOutOfBounds(shipObj, cordOne, cordTwo, direction)) {
            return false;
        }
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

function shipIsOutOfBounds(shipObj, cordOne, cordTwo, direction) {
    if (direction === "horizontal" && cordOne - 1 + shipObj.getLength() > 10) {
        return true;
    }
    if (direction === "vertical" && cordTwo - 1 + shipObj.getLength() > 10) {
        return true;
    }
}
