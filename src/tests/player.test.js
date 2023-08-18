/* eslint-disable no-undef */
import Ship from "../modules/ship";
import Player from "../modules/player";

//  FOR ENTIRE FILE TESTS
const playerOne = Player("player-one");
playerOne.switchTurn();

const playerTwo = Player("player-two");
const shipPlayerOne = Ship(1, "ship-one");
const shipPlayerTwo = Ship(1, "ship-two");

playerOne.game.placeShip(shipPlayerOne, 1, 1, "vertical");
playerTwo.game.placeShip(shipPlayerTwo, 1, 1, "vertical");

//  TESTS
test("isnt their turn, cant go", () => {
    expect(playerTwo.takeTurn()).toEqual(false);
});

test("place player ships correctly", () => {
    expect(playerOne.game.board[1][1]).toEqual(shipPlayerOne);
    expect(playerTwo.game.board[1][1]).toEqual(shipPlayerTwo);
});

test("player one switched turns correctly", () => {
    expect(playerOne.takeTurn(playerTwo, 1, 1)).toEqual(true);
});

test("hit misses", () => {
    playerOne.takeTurn(playerTwo, 2, 1);
    expect(playerTwo.game.missedCords).toEqual([[2, 1]]);
    expect(playerTwo.game.misses).toEqual(1);
});

test("playerTwo now has sunk ships because of above test", () => {
    expect(playerTwo.game.allShipsSunk()).toEqual(true);
});
