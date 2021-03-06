import { Player } from '../src/Player.js';
import { Board } from '../src/Board.js';
import { JailCell } from '../src/Cell.js';
import { EmptyCell } from '../src/Cell';

let boardMock = jest.spyOn(Board.prototype, 'getCell');

test('should create player with defaults', () => {
    let player = new Player(new Board());
    expect(player.getMoney()).toBe(1000);
    expect(player.currentCell).toBe(undefined);
    expect(player.board).not.toBe(undefined); 
});


test('should deduct money from player when player lands on jail', () => {
    boardMock.mockImplementation(() => new JailCell())
    let player = new Player(new Board());
    expect(player.getMoney()).toBe(1000);
    player.move(12);
    expect(player.getMoney()).toBe(750);
});

afterEach(() => {
    boardMock.mockClear();
})

