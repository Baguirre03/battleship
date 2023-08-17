/* eslint-disable no-undef */
import Ship from "../modules/ship";

const threeShip = new Ship(3, "three-ship");
const twoShip = new Ship(2, "two-ship");

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
    expect(threeShip.sunk).toBe(true);
});

test("two ship is not sunk when started", () => {
    expect(twoShip.isSunk()).toBe(false);
    expect(twoShip.sunk).toBe(false);
});
