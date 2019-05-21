var LivingCreature = require("./mclass.js")
var random = require("./random")
 
module.exports =class Eatgrass extends LivingCreature{
    constructor(x,y) {
        super(x,y);
        this.energy = 5;
    }

    move() {

        var fundCords = this.getDirections(0);
        var cord = random(fundCords);

        if (cord) {
            var x = cord[0];
            var y = cord[1];

            matrix[y][x] = 2;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;
        }
    }

    eat(tex) {
        var fundCords = this.getDirections(1);
        var cord = random(fundCords);

        if (cord) {
            var x = cord[0];
            var y = cord[1];

            matrix[y][x] = 2;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;

            this.multiply++;

            this.energy++;

            for (var i in xotArr) {
                if (x == xotArr[i].x && y == xotArr[i].y) {
                    xotArr.splice(i, 1);
                }
            }

            if (this.multiply >= tex) {
                this.mul()
                this.multiply = 0;
            }


        } else {
            this.move();
            this.energy--;

            if (this.energy <= 0) {
                
                this.die(eatArr);
            }
        }
    }

    mul() {
        var fundCords = this.getDirections(0);
        var cord = random(fundCords);

        if (cord) {
            var x = cord[0];
            var y = cord[1];

            var norXotaker = new Eatgrass(x, y);
            eatArr.push(norXotaker);

            matrix[y][x] = 2;
        }
    }
}