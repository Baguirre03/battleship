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

    return {
        playerName,
        game,
        turn,
        takeTurn,
        switchTurn,
    };
}
