import Gameboard from "./gameboard";

/* eslint-disable prefer-const */
export default function Player(playerName) {
    let turn = false;
    let game = Gameboard();

    function takeTurn(opponent, cordOne, cordTwo) {
        if (this.turn === false) {
            return false;
        }
        opponent.game.recieveAttack(cordOne, cordTwo);
        return true;
    }

    function switchTurn() {
        this.turn = true;
        return this.turn;
    }

    function randomNumber() {
        let num = Math.floor(Math.random() * 10);
        if (num === 0) {
            return randomNumber();
        }
        return num;
    }

    function availableMoves(opponent) {
        let cords = [randomNumber(), randomNumber()];
        let previousMoves = opponent.game.allCords;

        if (!previousMoves.length) {
            return cords;
        }

        for (let i = 0; i <= previousMoves.length; i += 1) {
            if (
                cords[0] === previousMoves[i][0] &&
                cords[1] === previousMoves[i][1]
            ) {
                return availableMoves(opponent);
            }
        }
        return cords;
    }

    function aiMoves(opponent) {
        let cords = availableMoves(opponent);
        opponent.game.recieveAttack(cords[0], cords[1]);
        return cords;
    }

    return {
        playerName,
        game,
        turn,
        takeTurn,
        switchTurn,
        aiMoves,
    };
}
