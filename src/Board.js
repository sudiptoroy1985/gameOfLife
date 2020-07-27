import { Cell } from './Cell.js';


export class Board {

    cells = [];

    constructor(cells){
        this.cells = cells;
    }

    getCell(current, endIdx){
        let toTraverseIndex = this.cells.indexOf(current) + endIdx;
        if(toTraverseIndex >= this.cells.length){
          return this.cells[toTraverseIndex - this.cells.length]
        }
        return this.cells[toTraverseIndex];
    }

}