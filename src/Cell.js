export class Cell {
    execute(money){
        return money;
    }
}

export class EmptyCell extends Cell {
}

export class JailCell extends Cell {
    execute(money){
        return money - 250;
    }
}

export class TreasureCell extends Cell {
    execute(money){
        return money + 200;
    }
}

export class HotelCell extends Cell {
    execute(money){
        return money >= 200 ? 
        money - 200 : 
        money;
    }
}