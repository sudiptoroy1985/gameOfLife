import { Board } from './Board.js';


export class Player {
    
    money = 1000;  
    currentCell = undefined;

    constructor(board, id){
        this.board = board;
        this.id = id;
    }

    move(moveIdx) {
        (this.currentCell = this.board.getCell(this.currentCell, moveIdx))
            .execute(this);
    }

    getMoney() {
        return this.money;
    }

}