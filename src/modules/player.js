import Gameboard from "./gameboard";

/* eslint-disable prefer-const */
export default function Player(playerName) {
    let turn = false;
    let game = Gameboard();
    let winner = false;

    function takeTurn(opponent, cordOne, cordTwo) {
        if (this.turn === false) {
            return false;
        }
        return opponent.game.recieveAttack(cordOne, cordTwo);
    }

    function switchTurn() {
        this.turn ? this.turn = false : this.turn = true  

        return this.turn;
    }

    function randomNumber() {
        let num = Math.floor(Math.random() * 11);
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

        for (let i = 0; i < previousMoves.length; i += 1) {
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
        const cell = document.querySelector(
            `[data-cord-one="${cords[0]}"][data-cord-two="${cords[1]}"]`,
        );
        if (opponent.game.recieveAttack(cords[0], cords[1]) === true) {
            cell.classList.add("hit-ship");
            aiMoves(opponent)
            return true;
        }
        cell.classList.add("miss");
        return false;
    }

    return {
        playerName,
        game,
        turn,
        takeTurn,
        switchTurn,
        aiMoves,
        winner,
    };
}
