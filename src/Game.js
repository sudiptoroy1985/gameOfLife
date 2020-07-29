import { Cell, EmptyCell, JailCell, TreasureCell } from "./Cell.js";
import { Board } from "./Board.js";
import { Player } from "./Player.js";
import { PlayerResult } from "./PlayerResult.js";

export class Game {
  players = [];

  init(input, numberOfPlayers) {
    this.assignPlayers(this.createBoard(input), numberOfPlayers);
  }

  createBoard(input) {
    return new Board(
      input.split(",").map((input) => this.getCellMap().get(input))
    );
  }

  assignPlayers(board, numberOfPlayers) {
    Array.from(new Array(numberOfPlayers), (x, i) =>
      this.players.push(new Player(board, i))
    );
  }

  play(moveIdxs) {
    moveIdxs = moveIdxs.reverse();

    let tempMovIdx = 0;

    while (moveIdxs.length > 0) {
      let player = this.players[tempMovIdx];
      player.move(moveIdxs.pop());
      tempMovIdx = tempMovIdx >= this.players.length - 1 ? 
      0 : tempMovIdx + 1;
    }
  }

  getResult() {
    return this.players.map(
      (player) => new PlayerResult(player.id, player.getMoney())
    );
  }

  getCellMap() {
    let cellmap = new Map();
    cellmap.set("E", new EmptyCell());
    cellmap.set("J", new JailCell());
    cellmap.set("T", new TreasureCell());
    return cellmap;
  }
}
