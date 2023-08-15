/* eslint-disable no-undef */
import Ship from "./ship";

const threeShip = new Ship(3);
const twoShip = new Ship(2);

test("get length of ship", () => {
    expect(threeShip.getLength()).toBe(3);
});

test("add hit to ship", () => {
    threeShip.hit();
    expect(threeShip.getHits()).toBe(1);
});

test("add another hit to ship", () => {
    threeShip.hit();
    expect(threeShip.getHits()).toBe(2);
});

test("three hits, ship is sunk", () => {
    threeShip.hit();
    expect(threeShip.isSunk()).toBe(true);
});

test("two ship is not sunk when started", () => {
    expect(twoShip.isSunk()).toBe(false);
});
