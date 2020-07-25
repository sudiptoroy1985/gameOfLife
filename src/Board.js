import { Cell } from './Cell.js';


export class Board {

    cells = [];

    constructor(cells){
        this.cells = cells;
    }

    getCell(current, end){
        let currentIdx = this.cells.indexOf(current);
        return this.cells[currentIdx + end];
    }

}