/* eslint-disable no-undef */
import Gameboard from "../modules/gameboard";
import Ship from "../modules/ship";

const gameboard = new Gameboard();

test("place twoShip on gameboard", () => {
    const twoShip = new Ship(2, "two-ship");
    gameboard.placeShip(twoShip, 1, 1, "vertical");
    expect(gameboard.board[1][1] && gameboard.board[2][1]).toEqual(twoShip);
});

test("place threeShip on gameboard", () => {
    const threeShip = new Ship(3, "two-ship");
    gameboard.placeShip(threeShip, 2, 3, "horizontal");
    expect(gameboard.board[2][3]).toEqual(threeShip);
});

test("ship cannot be placed on edge of board vertical", () => {
    const threeShip = new Ship(3);
    expect(gameboard.placeShip(threeShip, 8, 9, "vertical")).toEqual(false);
});

test("horizontal out of bounds test", () => {
    const fiveShip = new Ship(5);
    expect(gameboard.placeShip(fiveShip, 7, 5, "horizontal")).toEqual(false);
});

test("ship spot is taken", () => {
    const shipOne = new Ship(1, "name");
    const shipShouldntPlace = new Ship(1, "another-name");
    gameboard.placeShip(shipOne, 1, 1, "vertical");
    expect(gameboard.placeShip(shipShouldntPlace, 1, 1, "vertical")).toBe(
        false,
    );
});

test("more complicated ship overlap", () => {
    const shipOne = new Ship(3, "name");
    const shipShouldntPlace = new Ship(5, "another-name");
    gameboard.placeShip(shipOne, 3, 4, "vertical");
    expect(gameboard.placeShip(shipShouldntPlace, 3, 4, "horizontal")).toBe(
        false,
    );
});
