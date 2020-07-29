import { Game } from '../src/Game.js';
import { EmptyCell, JailCell, TreasureCell } from '../src/Cell';
import { Player } from '../src/Player';
import { PlayerResult } from '../src/PlayerResult.js';

test('should correctly identify Empty cell', () => {
    let game = new Game();
    game.init('E',1);
    game.players.every(player => expect(player.board.cells.length).toBe(1));
    game.players.every(player => expect(player.board.cells[0] instanceof EmptyCell).toBe(true));
});

test('should correctly identify Jail cell', () => {
    let game = new Game();
    game.init('J',1);
    game.players.every(player => expect(player.board.cells.length).toBe(1));
    game.players.every(player => expect(player.board.cells[0] instanceof JailCell).toBe(true));
});

test('should correctly identify Treasure cell', () => {
    let game = new Game();
    game.init('T',1);
    game.players.every(player => expect(player.board.cells.length).toBe(1));
    game.players.every(player => expect(player.board.cells[0] instanceof TreasureCell).toBe(true));
});

test('should create game with defaults', () => {
    let game = new Game();
    game.init('E,E,J,E',1);
    game.players.every(player => expect(player).not.toBe(undefined));
    game.players.every(player => expect(player.board).not.toBe(undefined));
    game.players.every(player => expect(player.board.cells.length).toBe(4));
});

test('should return result if initialized', () => {
    let game = new Game();
    game.init('E,E,J,E', 1);
    const expected = new PlayerResult(0,1000);
    expect(game.getResult()).toEqual([{...expected}]);
});

test('should play number of moves for initialized player for empty and jail cells', () => {
    let game = new Game();
    game.init('J,E,J,J',1);
    game.play([1,2,2,3]); 
    const expected = new PlayerResult(0,0);
    expect(game.getResult()).toEqual([{...expected}]);
});

test('should play number of moves for single initialized player for empty , jail and treasure cells', () => {
    let game = new Game();
    game.init('J,E,J,J,T,T,J,E',1);
    game.play([1,2,2,3,5]);
    const expected = new PlayerResult(0,900);
    expect(game.getResult()).toEqual([{...expected}]);
});

test('should play number of moves for single initialized player for empty , jail , treasure and hotel cells', () => {
    let game = new Game();
    game.init('J,E,J,J,T,T,J,H',1);
    game.play([1,4,1,2]);
    const expected = new PlayerResult(0,950);
    expect(game.getResult()).toEqual([{...expected}]);
});

test('should play number of moves for multiple players for empty , jail and treasure cells', () => {
    let game = new Game();
    game.init('J,E,J,J,T,T,J,E',3);
    game.play([1,2,2,3,5,1]);
    const expectedPlayer1Result = new PlayerResult(0,500);
    const expectedPlayer2Result = new PlayerResult(1,750);
    const expectedPlayer3Result = new PlayerResult(2,750);
    expect(game.getResult()).toEqual([
        {...expectedPlayer1Result},
        {...expectedPlayer2Result},
        {...expectedPlayer3Result}]
    );
});



