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
