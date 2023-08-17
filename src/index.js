import Gameboard from "./modules/gameboard";
import Ship from "./modules/ship";

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
console.log(newGame);
console.log(newGame.allShipsSunk());
