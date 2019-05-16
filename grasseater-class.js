var LivingCreature = require("./mclass.js")

module.exports =class Eatgrass extends LivingCreature{
    constructor(x,y) {
        super(x,y);
        this.energy = 5;
    }

    move() {

        let fundCords = this.getDirections(0);
        let cord = random(fundCords);

        if (cord) {
            let x = cord[0];
            let y = cord[1];

            matrix[y][x] = 2;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;
        }
    }

    eat() {
        let fundCords = this.getDirections(1);
        let cord = random(fundCords);

        if (cord) {
            let x = cord[0];
            let y = cord[1];

            matrix[y][x] = 2;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;

            this.multiply++;

            this.energy++;

            for (let i in xotArr) {
                if (x == xotArr[i].x && y == xotArr[i].y) {
                    xotArr.splice(i, 1);
                }
            }

            if (this.multiply >= 9) {
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
        let fundCords = this.getDirections(0);
        let cord = random(fundCords);

        if (cord) {
            let x = cord[0];
            let y = cord[1];

            let norXotaker = new Eatgrass(x, y);
            eatArr.push(norXotaker);

            matrix[y][x] = 2;
        }
    }
}