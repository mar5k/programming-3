var LivingCreature = require("./mclass.js");

var random = require("./random");

module.exports =class Gishatich extends LivingCreature{
    constructor(x, y) {
        super(x,y);
        this.energy = 121;
    }

    eat(re) {
        var fundCords = this.getDirections(2);
        var cord = random(fundCords);

        if (cord) {
            var x = cord[0]; 
            var y = cord[1];

            matrix[y][x] = 3;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;

            this.multiply++;
            this.energy++;

            for (var i in eatArr) {
                if (x == eatArr[i].x && y == eatArr[i].y) {
                    eatArr.splice(i, 1);
                    break;
                }
            }

            if (this.multiply >= re) {
                this.mul()
                this.multiply = 0;
            }
        } else {
            this.move();
            this.energy -= 2;
            if (this.energy <= 0) {
                this.die(gishArr);
            }
        }
    }
    mul() {
        var fundCords = this.getDirections(0);
        var cord = random(fundCords);

        if (cord) {
            var x = cord[0];
            var y = cord[1];
            var norGishatich = new Gishatich(x, y);
            gishArr.push(norGishatich);
            matrix[y][x] = 3;
        }
    }
    move() {
        var fundCords = this.getDirections(0);
        var cord = random(fundCords);

        if (cord) {
            var x = cord[0];
            var y = cord[1];

            matrix[y][x] = 3;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;
        }
    }
}
