var LivingCreature = require("./mclass.js")
var random = require("./random")

module.exports = class Krcox extends LivingCreature {

    move() {
        
        var fundCords = this.getDirections_2(0);
        var cord = random(fundCords);

        if (cord) {
            var x = cord[0];
            var y = cord[1];

            matrix[y][x] = 6;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;
        }
    }

    eat() {
        
        var fundCords = this.getDirections_2(3);
        var qq = this.getDirections_2(2);
        var ball = this.getDirections_2(1);
        var basket = this.getDirections_2(4);
        var euu = this.getDirections_2(5);
        var cord = random(fundCords);
        var rr = random(qq);
        var drr = random(ball);
        var gf = random(basket);
        var lrr = random(euu);

        if (cord) {
            var x = cord[0];
            var y = cord[1];

            matrix[y][x] = 6;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;

            for (var j in gishArr) {
                if (x == gishArr[j].x && y == gishArr[j].y) {
                    gishArr.splice(j, 1);
                }
            }
        } else if (rr) {
            var x = rr[0];
            var y = rr[1];

            matrix[y][x] = 6;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;

            for (var j in eatArr) {
                if (x == eatArr[j].x && y == eatArr[j].y) {
                    eatArr.splice(j, 1);
                }
            }
        } else if (drr) {
            var x = drr[0];
            var y = drr[1];

            matrix[y][x] = 6;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;

            for (var j in xotArr) {
                if (x == xotArr[j].x && y == xotArr[j].y) {
                    xotArr.splice(j, 1);
                    break;
                }
            }
        } else if (gf) {
            var x = gf[0];
            var y = gf[1];

            matrix[y][x] = 6;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;

            for (var j in vorsArr) {
                if (x == vorsArr[j].x && y == vorsArr[j].y) {
                    vorsArr.splice(j, 1);
                    break;
                }
            }
        } else if (lrr) {
            var x = lrr[0];
            var y = lrr[1];

            matrix[y][x] = 6;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;

            for (var j in polArr) {
                if (x == polArr[j].x && y == polArr[j].y) {
                    polArr.splice(j, 1);
                    break;
                }
            }
        } else {
            this.move();
        }
    }
}