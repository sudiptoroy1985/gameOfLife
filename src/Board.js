import { Cell } from './Cell.js';


export class Board {

    cells = [];

    constructor(cells){
        this.cells = cells;
    }

    getCell(current, endIdx){
        let currentIdx = this.cells.indexOf(current);
        let toTraverseIndex = currentIdx + endIdx;
        if((currentIdx + endIdx) >= this.cells.length){
          return this.cells[this.cells.length - toTraverseIndex]
        }else{
        return this.cells[toTraverseIndex];
        }
    }

}