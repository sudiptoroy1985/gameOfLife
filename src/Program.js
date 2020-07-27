import { Game } from "./Game.js";

let game = new Game();
game.init('E,E,J,E',1);
game.play([1,1,1]);
game.getResult().forEach(playerResult => {
    console.log(`Player-${playerResult.id} has total worth ${playerResult.money}`)
});
