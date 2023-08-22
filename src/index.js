import { gameLoop, generateStarterHTML, placeShips } from "./modules/DOM";
import "./style.css";

generateStarterHTML();

gameLoop();

placeShips()