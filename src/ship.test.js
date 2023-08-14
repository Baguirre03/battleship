/* eslint-disable no-undef */
import Ship from "./ship";

const threeLengthShip = new Ship(3);
const twoLengthShip = new Ship(2);

test("get length of ship", () => {
    expect(threeLengthShip.getLength()).toBe(3);
});

test("get length of ship", () => {
    expect(twoLengthShip.getLength()).toBe(2);
});

test("add hit to ship", () => {
    threeLengthShip.hit();
    expect(threeLengthShip.getHits()).toBe(1);
});
