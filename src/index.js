import Gameboard from "./modules/gameboard";
import Ship from "./modules/ship";

const game = new Gameboard();
const threeShip = new Ship(3, "ship");

console.log(game.board);
game.placeShip(threeShip, 3, 3, "horizontal");
