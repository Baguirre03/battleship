/* eslint-disable no-unused-expressions */
// eslint-disable-next-line import/no-cycle
import { checkWinner, updateShips } from "./DOM";
import Gameboard from "./gameboard";

/* eslint-disable prefer-const */
export default function Player(playerName) {
    let turn = false;
    let game = Gameboard();
    let winner = false;
    let hit = false;

    function takeTurn(opponent, cordOne, cordTwo) {
        if (this.turn === false) {
            return false;
        }
        return opponent.game.recieveAttack(cordOne, cordTwo);
    }

    function switchTurn() {
        this.turn ? (this.turn = false) : (this.turn = true);
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

    function smartMove(opponent, cords, counter = 0) {
        let options = [
            [cords[0] + 1, cords[1]], //  X
            [cords[0] - 1, cords[1]], // X
            [cords[0], cords[1] - 1], // Y
            [cords[0], cords[1] + 1], // Y
        ];

        options = options.filter(
            (option) =>
                option[0] >= 1 &&
                option[0] <= 10 &&
                option[1] >= 1 &&
                option[1] <= 10,
        );

        let choice = options[Math.floor(Math.random() * options.length)];
        for (let i = 0; i < opponent.game.allCords.length; i += 1) {
            if (
                opponent.game.allCords[i][0] === choice[0] &&
                opponent.game.allCords[i][1] === choice[1]
            ) {
                if (counter === 5) {
                    return availableMoves(opponent);
                }
                return smartMove(
                    opponent,
                    opponent.game.hitCords[opponent.game.hitCords.length - 1],
                    counter + 1,
                );
            }
        }
        return choice;
    }

    function attackSequence(opponent, cords) {
        updateShips(opponent);
        checkWinner();
        setTimeout(() => {
            const cell = document.querySelector(
                `[data-cord-one="${cords[0]}"][data-cord-two="${cords[1]}"]`,
            );

            if (opponent.game.recieveAttack(cords[0], cords[1]) === true) {
                hit = true;
                cell.classList.add("hit-ship");
                cell.classList.remove("ship-placed-there");
                // eslint-disable-next-line no-use-before-define
                aiMoves(opponent);
                return true;
            }

            if (
                opponent.game.lastShipHit !== null &&
                opponent.game.lastShipHit.isSunk()
            ) {
                hit = false;
            }

            opponent.switchTurn();
            cell.classList.add("miss");
            return false;
        }, 500);
    }

    function aiMoves(opponent) {
        if (hit === true) {
            let cords = smartMove(
                opponent,
                opponent.game.hitCords[opponent.game.hitCords.length - 1],
                0,
            );
            attackSequence(opponent, cords);
        } else {
            let cords = availableMoves(opponent);
            attackSequence(opponent, cords);
        }
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
