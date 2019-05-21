var LivingCreature = require("./mclass.js");

var Grass = require('./grass-class');

var random = require("./random")

module.exports = class Police extends LivingCreature {

    move() {

        var fundCords = this.getDirections_1(0);
        var ff = this.getDirections_1(1);
        var kk = this.getDirections_1(2);
        var dd = this.getDirections_1(3);
        var c = random(fundCords);
        var kt = random(ff);
        var k3 = random(kk);
        var k4 = random(dd);

        if (c) {
            var x = c[0];
            var y = c[1];

            matrix[y][x] = 5;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;
        } else if (kt) {
            var x = kt[0];
            var y = kt[1];

            matrix[y][x] = 5;
            matrix[this.y][this.x] = 1;

            this.x = x;
            this.y = y;

        } else if (k3) {
            var x = k3[0];
            var y = k3[1];

            matrix[y][x] = 5;
            matrix[this.y][this.x] = 2;

            this.x = x;
            this.y = y;

        } else if (k4) {
            var x = k4[0];
            var y = k4[1];

            matrix[y][x] = 5;
            matrix[this.y][this.x] = 3;

            this.x = x;
            this.y = y;
        }

    }

    eat() {
        var foundCords = this.getDirections_1(4);
        var cd = random(foundCords);
        if (cd) {
            var x = cd[0];
            var y = cd[1];

            matrix[y][x] = 1;
            matrix[this.y][this.x] = 0;

            var ggggrass = new Grass(x, y);
            xotArr.push(ggggrass);

            this.x = x;
            this.y = y;

            for (var j in vorsArr) {
                if (x == vorsArr[j].x && y == vorsArr[j].y) {
                    vorsArr.splice(j, 1);
                    break;
                }
            }
            for (var j in polArr) {
                if (x == polArr[j].x && y == polArr[j].y) {
                    polArr.splice(j, 1);

                }
            }

        } else {
            this.move();
        }
    }
}