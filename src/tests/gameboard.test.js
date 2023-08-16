/* eslint-disable no-undef */
import Gameboard from "../modules/gameboard";
import Ship from "../modules/ship";

const gameboard = new Gameboard();

// test("place ship on gameboard", () => {
//     gameboard.placeShip(1, 1, "test");
//     expect(gameboard.board[1][1]).toEqual("test");
// });

// test("place ship in middle of board", () => {
//     gameboard.placeShip(4, 5, "ship");
//     expect(gameboard.board[4][5]).toEqual("ship");
// });

test("ship cannot be placed on edge of board vertical", () => {
    const threeShip = new Ship(3);
    expect(gameboard.placeShip(threeShip, 8, 9, "vertical")).toEqual(false);
});

test("horizontal out of bounds test", () => {
    const fiveShip = new Ship(5);
    expect(gameboard.placeShip(fiveShip, 7, 5, "horizontal")).toEqual(false);
});

// test("place vertical of ship", () => {
//     gameboard.placeShip(twoShip, 1, 1, "vertical");
//     expect(gameboard.board[1][1] && gameboard.board[2][1]).toEqual("two-ship");
// });

// test("place horizontal ship", () => {
//     gameboard.placeShip(twoShip, 2, 1, "horizontal");
//     expect(gameboard.board[2][1] && gameboard.board[3][1]).toEqual("two-ship");
// });
