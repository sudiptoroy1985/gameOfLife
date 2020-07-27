import { Cell, EmptyCell, JailCell, TreasureCell } from './Cell.js'
import { Board } from './Board.js'
import { Player } from './Player.js';
import { PlayerResult } from './PlayerResult.js';


export class Game {

    players = [];

     init(input, numberOfPlayers) {
        let cells = input.split(',').map(input => {
            return this.getCellMap().get(input);
        });

        let board = new Board(cells);

        while(numberOfPlayers > 0){
            this.players.push(new Player(board, numberOfPlayers));
            numberOfPlayers--;
        }
    }

    play(moves){
      moves.forEach(moveIdx => {
          this.players.forEach(player => {
              player.move(moveIdx);
          })
        })
    }

    getResult(){
        return this.players.map(player => new PlayerResult(player.id, player.getMoney()));
    }

    getCellMap(){
        let cellmap = new Map();
        cellmap.set('E', new EmptyCell());
        cellmap.set('J', new JailCell());
        cellmap.set('T', new TreasureCell())
        return cellmap;
    }
}









