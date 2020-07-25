import { Board } from './../src/Board.js'
import { EmptyCell, JailCell } from '../src/Cell.js';

test('should have empty contents', () => {
      let board = new Board([]);
      expect(board.cells.length).toBe(0);
});

test('should have correct cells', () => {
  let board = new Board([new EmptyCell(), new JailCell()]);
  expect(board.cells.length).toBe(2);
});

test('should return correct cell', () => {
  let board = new Board(
    [
      new EmptyCell(), 
      new JailCell(),
      new EmptyCell(), 
      new JailCell(),
      new EmptyCell(), 
      new JailCell(),
      new EmptyCell(),
      new EmptyCell(),
      new EmptyCell()
    ]);

    let firstcell = board.cells[0];
    let expectedTraversedToCell = board.cells[5];
    let cell = board.getCell(firstcell, 5);
    expect(cell).toBe(expectedTraversedToCell);
})

test('should return correct cell after exhausting single run', () => {
  let board = new Board(
    [
      new EmptyCell(), 
      new JailCell(),
      new EmptyCell(), 
      new JailCell()
    ]);

    let firstcell = board.cells[1];
    let expectedTraversedToCell = board.cells[0];
    let cell = board.getCell(firstcell, 3);
    expect(cell).toBe(expectedTraversedToCell);
})