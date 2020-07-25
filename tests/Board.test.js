import { Board } from './../src/Board.js'

test('should have empty contents', () => {
      let board = new Board([]);
      expect(board.cells.length).toBe(0);
});