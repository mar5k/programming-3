var LivingCreature = require("./mclass.js")

var random = require("./random")

module.exports = class Vorsord extends LivingCreature{
    
    move() {    

        let fundCords = this.getDirections_1(0);
        let ff = this.getDirections(1);
        let cord = random(fundCords);
        let kt = random(ff);

        if (cord) {
            let x = cord[0];
            let y = cord[1];

            matrix[y][x] = 4;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;
        } else if (kt) {
            let x = kt[0];
            let y = kt[1];

            matrix[y][x] = 4;
            matrix[this.y][this.x] = 1;

            this.x = x;
            this.y = y;

        }

    }
    mul() {
        let fundCords = this.getDirections(0);
        let cord = random(fundCords);

        if (cord) {
            let x = cord[0];
            let y = cord[1];

            let norvors = new Vorsord(x, y);
            xumb.push(norvors);

            matrix[y][x] = 4;
        }
    }
    eat(base) {
        let fundCords = this.getDirections_1(3);
        let qq = this.getDirections_1(2);
        let cord = random(fundCords);
        let rr = random(qq);

        if (cord) {
            let x = cord[0];
            let y = cord[1];

            matrix[y][x] = 4;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;
            this.multiply++;

            for (let j in vohmak) {
                if (x == vohmak[j].x && y == vohmak[j].y) {
                    vohmak.splice(j, 1);
                }
            }
        } else if (rr) {
            let x = rr[0];
            let y = rr[1];

            matrix[y][x] = 4;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;
            this.multiply++;

            for (let j in eatArr) {
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