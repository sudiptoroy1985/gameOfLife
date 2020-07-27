import { Game } from '../src/Game.js';
import { EmptyCell } from '../src/Cell';

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

test('should play number of moves for initialized player ', () => {
    let game = new Game();
    game.init('J,E,J,J');
    game.play([1,2,2,3]);
    expect(game.getResult()).toBe(0);
});
