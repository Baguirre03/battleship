import Gameboard from "./modules/gameboard";
import Ship from "./modules/ship";

const game = new Gameboard();
const threeShip = new Ship(3, "ship");
const threeShipCopy = new Ship(3, "ship-two");
