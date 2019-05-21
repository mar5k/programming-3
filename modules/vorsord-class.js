var LivingCreature = require("./mclass.js")

var random = require("./random")

module.exports = class Vorsord extends LivingCreature {

    move() {

        var fundCords = this.getDirections_1(0);
        var ff = this.getDirections(1);
        var cord = random(fundCords);
        var kt = random(ff);

        if (cord) {
            var x = cord[0];
            var y = cord[1];

            matrix[y][x] = 4;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;

        } else if (kt) {

            var x = kt[0];
            var y = kt[1];

            matrix[y][x] = 4;
            matrix[this.y][this.x] = 1;

            this.x = x;
            this.y = y;

        }
    }

    mul() {

        var fundCords = this.getDirections(0);
        var cord = random(fundCords);

        if (cord) {
            var x = cord[0];
            var y = cord[1];

            var norvors = new Vorsord(x, y);
            vorsArr.push(norvors);

            matrix[y][x] = 4;
        }
    }
    eat(base) {
        var fundCords = this.getDirections_1(3);
        var qq = this.getDirections_1(2);
        var cord = random(fundCords);
        var rr = random(qq);

        if (cord) {
            var x = cord[0];
            var y = cord[1];

            matrix[y][x] = 4;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;
            this.multiply++;

            for (var j in gishArr) {
                if (x == gishArr[j].x && y == gishArr[j].y) {
                    gishArr.splice(j, 1);
                }
            }
        } else if (rr) {
            var x = rr[0];
            var y = rr[1];

            matrix[y][x] = 4;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;
            this.multiply++;

            for (var j in eatArr) {
                if (x == eatArr[j].x && y == eatArr[j].y) {
                    eatArr.splice(j, 1);
                }
            }
        }
        if (this.multiply >= base) {
            this.mul();
            this.multiply = 0;
        } else {
            this.move();
        }
    }
}