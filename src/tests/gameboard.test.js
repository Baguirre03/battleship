/* eslint-disable no-undef */
import Gameboard from "../modules/gameboard";
import Ship from "../modules/ship";

const gameboard = new Gameboard();
const twoShip = new Ship(2, "two-ship");

test("place twoShip on gameboard", () => {
    gameboard.placeShip(twoShip, 1, 1, "vertical");
    expect(gameboard.board[1][1] && gameboard.board[1][2]).toEqual(twoShip);
});

test("place threeShip on gameboard", () => {
    const threeShip = new Ship(3, "three-ship");
    gameboard.placeShip(threeShip, 2, 3, "horizontal");
    expect(
        gameboard.board[2][3] && gameboard.board[3][3] && gameboard.board[4][3],
    ).toEqual(threeShip);
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

test.skip("checks cordinate for ship", () => {
    const ship = Ship(2, "ship");
    gameboard.placeShip(ship, 1, 1, "vertical");
    expect(gameboard.recieveAttack(1, 1)).toEqual(ship);
}); //  worked -- returned the ship object.

test("recieve returns a miss if no ship is there", () => {
    expect(gameboard.recieveAttack(1, 8)).toEqual("miss");
});
test("counts a miss from above test", () => {
    expect(gameboard.getMisses()).toEqual(1);
    expect(gameboard.missedCords).toEqual([[1, 8]]);
});

test("counts another miss", () => {
    gameboard.recieveAttack(1, 7);
    expect(gameboard.getMisses()).toEqual(2);
    expect(gameboard.missedCords).toEqual([
        [1, 8],
        [1, 7],
    ]);
});

test("hit the ship correctly", () => {
    gameboard.recieveAttack(1, 1);
    expect(twoShip.getHits()).toEqual(1);
});

test("all ships sunk basic test", () => {
    const newGame = Gameboard();
    const shipOne = Ship(1, "ship-one");
    const shipTwo = Ship(1, "ship-two");
    newGame.placeShip(shipOne, 1, 1, "vertical");
    newGame.placeShip(shipTwo, 2, 1, "vertical");
    newGame.recieveAttack(1, 1);
    newGame.recieveAttack(2, 1);
    expect(newGame.allShipsSunk()).toEqual(true);
});

test("not all ships are sunk", () => {
    const newGame = Gameboard();
    const shipOne = Ship(1, "ship-one");
    const shipTwo = Ship(1, "ship-two");
    newGame.placeShip(shipOne, 1, 1, "vertical");
    newGame.placeShip(shipTwo, 2, 1, "vertical");
    newGame.recieveAttack(1, 1);
    expect(newGame.allShipsSunk()).toEqual(false);
});

test("add another ship to be sunk", () => {
    const newGame = Gameboard();
    const shipOne = Ship(1, "ship-one");
    const shipTwo = Ship(1, "ship-two");
    const shipThree = Ship(2, "third longer ship");

    newGame.placeShip(shipOne, 1, 1, "vertical");
    newGame.placeShip(shipTwo, 2, 1, "vertical");
    newGame.placeShip(shipThree, 8, 1, "vertical");

    newGame.recieveAttack(1, 1);
    newGame.recieveAttack(2, 1);
    newGame.recieveAttack(8, 1);
    newGame.recieveAttack(8, 2);

    expect(newGame.allShipsSunk()).toEqual(true);
});
