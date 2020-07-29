import { EmptyCell, JailCell, TreasureCell, HotelCell } from '../src/Cell.js';
import { Player } from '../src/Player.js';

var player = undefined;

beforeEach(() => {
    player = new Player(undefined, 1);
})

test('should return back same money if empty cell', () => {
    new EmptyCell().execute(player);
    expect(player.money).toBe(1000);
});

test('should deduct 250 from input money if jail cell', () => {
    new JailCell().execute(player);
    expect(player.money).toBe(750);
});

test('should add 250 to input money if treasure cell', () => {
    new TreasureCell().execute(player);
    expect(player.money).toBe(1200);
});

test('should remove 200 from input money if input money is greater than hotel worth', () => {
    new HotelCell().execute(player);
    expect(player.money).toBe(800);
});

test('should return input money as is if input money is less than hotel worth', () => {
    player.money -= 1000
    new HotelCell().execute(player);
    expect(player.money).toBe(0);
});