var LivingCreature = require("./mclass.js")
var random = require("./random")
module.exports = class Krcox extends LivingCreature {
    constructor(x, y) {
        super(x, y);
        this.energy = 1000;
    }


    getDirections(t) {
        this.newDirections_2();
        return super.getDirections(t);
    }
    move() {

        let fundCords = this.getDirections(0);
        let cord = random(fundCords);

        if (cord) {
            let x = cord[0];
            let y = cord[1];

            matrix[y][x] = 6;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;
        }
    }

    eat() {
        let fundCords = this.getDirections(3);
        let qq = this.getDirections(2);
        let ball = this.getDirections(1);
        let basket = this.getDirections(4);
        let euu = this.getDirections(5);
        let cord = random(fundCords);
        let rr = random(qq);
        let drr = random(ball);
        let gf = random(basket);
        let lrr = random(euu);

        if (cord) {
            let x = cord[0];
            let y = cord[1];

            matrix[y][x] = 6;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;
            this.energy++;

            for (let j in vohmak) {
                if (x == vohmak[j].x && y == vohmak[j].y) {
                    vohmak.splice(j, 1);
                }
            }
        } else if (rr) {
            let x = rr[0];
            let y = rr[1];

            matrix[y][x] = 6;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;
            this.energy++;

            for (let j in eatArr) {
                if (x == eatArr[j].x && y == eatArr[j].y) {
                    eatArr.splice(j, 1);
                }
            }
        } else if (drr) {
            let x = drr[0];
            let y = drr[1];

            matrix[y][x] = 6;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;
            this.energy++;

            for (let j in xotArr) {
                if (x == xotArr[j].x && y == xotArr[j].y) {
                    xotArr.splice(j, 1);
                }
            }
        } else if (gf) {
            let x = gf[0];
            let y = gf[1];

            matrix[y][x] = 6;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;
            this.energy++;

            for (let j in xumb) {
                if (x == xumb[j].x && y == xumb[j].y) {
                    xumb.splice(j, 1);
                }
            }
        } else if (lrr) {
            let x = lrr[0];
            let y = lrr[1];

            matrix[y][x] = 6;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;
            this.energy++;

            for (let j in legal) {
                if (x == legal[j].x && y == legal[j].y) {
                    legal.splice(j, 1);
                }
            }
        } else {
            this.move();
            this.energy = this.energy - 3;
        }
        if (this.energy <= 0) {
            this.die(burundukner);
        }
    }

}