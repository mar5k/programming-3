var LivingCreature = require("./mclass.js");

var random = require("./random");

module.exports =class Gishatich extends LivingCreature{
    constructor(x, y) {
        super(x,y);
        this.energy = 121;
    }

    eat() {
        let fundCords = this.getDirections(2);
        let cord = random(fundCords);

        if (cord) {
            let x = cord[0];
            let y = cord[1];

            matrix[y][x] = 3;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;

            this.multiply++;
            this.energy++;

            for (let i in eatArr) {
                if (x == eatArr[i].x && y == eatArr[i].y) {
                    eatArr.splice(i, 1);
                }
            }

            if (this.multiply >= 5) {
                this.mul()
                this.multiply = 0;
            }
        } else {
            this.move();
            this.energy = this.energy - 2;
            if (this.energy <= 0) {
                this.die(vohmak);
            }
        }
    }
    mul() {
        let fundCords = this.getDirections(0);
        let cord = random(fundCords);

        if (cord) {
            let x = cord[0];
            let y = cord[1];
            let norGishatich = new Gishatich(x, y);
            vohmak.push(norGishatich);
            matrix[y][x] = 3;
        }
    }
    move() {
        let fundCords = this.getDirections(0);
        let cord = random(fundCords);

        if (cord) {
            let x = cord[0];
            let y = cord[1];

            matrix[y][x] = 3;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;
        }
    }
}
