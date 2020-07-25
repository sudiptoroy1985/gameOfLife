import { Board } from './Board.js';


export class Player {

    money = 1000;

    currentCell = {};

    constructor(board){
        this.board = board;
    }

    move(moveIdx) {
        this.currentCell = this.board.getCell(this.currentCell, moveIdx);
        this.money = this.currentCell.execute(this.money);
    }

    getMoney() {
        return this.money;
    }

}