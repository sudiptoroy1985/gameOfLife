import { Cell, EmptyCell, JailCell } from './Cell.js'
import { Board } from './Board.js'
import { Player } from './Player.js';


export class Game {

    player = {};

     init() {
        let cells = 'E,E,J,E'.split(',').map(input => {
            return this.getCellMap().get(input);
        });

        let board = new Board(cells);
        this.player = new Player(board);
    }

    play(){
      [1,2,1].forEach(moveIdx => {
            this.player.move(moveIdx);
        })
    }

    getResult(){
        console.log(this.player.getMoney());
    }

    getCellMap(){
        let cellmap = new Map();
        cellmap.set('E', new EmptyCell());
        cellmap.set('J', new JailCell())
        return cellmap;
    }
}









