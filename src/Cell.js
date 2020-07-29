export class Cell {
    execute(player){}
}

export class EmptyCell extends Cell {
}

export class JailCell extends Cell {
    execute(player){
       player.money -= 250;
    }
}

export class TreasureCell extends Cell {
    execute(player){
        player.money += 200;
    }
}

export class HotelCell extends Cell {

    owners = [];

    execute(player){
        if(player.money >= 200) {
            player.money -= 200;
            this.owners.push(player);
        }
            
    }

}