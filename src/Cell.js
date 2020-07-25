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