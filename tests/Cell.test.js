import { EmptyCell, JailCell, TreasureCell } from '../src/Cell.js';

test('should return back same money if empty cell', () => {
    let emptyCell = new EmptyCell();
    expect(emptyCell.execute(1000)).toBe(1000);
});

test('should deduct 250 from input money if jail cell', () => {
    let emptyCell = new JailCell();
    expect(emptyCell.execute(1000)).toBe(750);
});

test('should add 250 to input money if treasure cell', () => {
    let emptyCell = new TreasureCell();
    expect(emptyCell.execute(1000)).toBe(1200);
});