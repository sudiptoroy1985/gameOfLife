import { EmptyCell, JailCell, TreasureCell, HotelCell } from '../src/Cell.js';

test('should return back same money if empty cell', () => {
    let emptyCell = new EmptyCell();
    expect(emptyCell.execute(1000)).toBe(1000);
});

test('should deduct 250 from input money if jail cell', () => {
    let jailCell = new JailCell();
    expect(jailCell.execute(1000)).toBe(750);
});

test('should add 250 to input money if treasure cell', () => {
    let treasureCell = new TreasureCell();
    expect(treasureCell.execute(1000)).toBe(1200);
});

test('should remove 200 from input money if input money is greater', () => {
    let hotelCell = new HotelCell();
    expect(hotelCell.execute(300)).toBe(100);
});

test('should return input money as is if input money is less than', () => {
    let hotelCell = new HotelCell();
    expect(hotelCell.execute(200)).toBe(0);
});