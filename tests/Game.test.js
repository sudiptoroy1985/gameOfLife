import { Game } from '../src/Game.js';
import { EmptyCell, JailCell, TreasureCell } from '../src/Cell';

test('should correctly identify Empty cell', () => {
    let game = new Game();
    game.init('E');
    expect(game.player.board.cells.length).toBe(1);
    expect(game.player.board.cells[0] instanceof EmptyCell).toBe(true)
});

test('should correctly identify Jail cell', () => {
    let game = new Game();
    game.init('J');
    expect(game.player.board.cells.length).toBe(1);
    expect(game.player.board.cells[0] instanceof JailCell).toBe(true)
});

test('should correctly identify Treasure cell', () => {
    let game = new Game();
    game.init('T');
    expect(game.player.board.cells.length).toBe(1);
    expect(game.player.board.cells[0] instanceof TreasureCell).toBe(true)
});

test('should create game with defaults', () => {
    let game = new Game();
    game.init('E,E,J,E');
    expect(game.player).not.toBe(undefined);
    expect(game.player.board).not.toBe(undefined);
    expect(game.player.board.cells.length).toBe(4);
});

test('should return result if initialized', () => {
    let game = new Game();
    game.init('E,E,J,E');
    expect(game.getResult()).toBe(1000);
});

test('should play number of moves for initialized player for empty and jail cells', () => {
    let game = new Game();
    game.init('J,E,J,J');
    game.play([1,2,2,3]);
    expect(game.getResult()).toBe(0);
});

test('should play number of moves for initialized player for empty , jail and treasure cells', () => {
    let game = new Game();
    game.init('J,E,J,J,T,T,J,E');
    game.play([1,2,2,3,5]);
    expect(game.getResult()).toBe(900);
});

