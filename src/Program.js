import { Game } from "./Game.js";

let game = new Game();
game.init('E,E,J,E');
game.play([1,1,1]);
console.log(game.getResult());
