import { Cell, EmptyCell, JailCell } from './Cell.js'
import { Board } from './Board.js'
import { Player } from './Player.js';


export class Game {

    player = undefined;

     init(input) {
        let cells = input.split(',').map(input => {
            return this.getCellMap().get(input);
        });

        let board = new Board(cells);
        this.player = new Player(board);
    }

    play(moves){
      moves.forEach(moveIdx => {
            this.player.move(moveIdx);
        })
    }

    getResult(){
        return this.player.getMoney();
    }

    getCellMap(){
        let cellmap = new Map();
        cellmap.set('E', new EmptyCell());
        cellmap.set('J', new JailCell())
        return cellmap;
    }
}









