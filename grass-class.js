 var LivingCreature = require("./mclass.js")

module.exports = class Grass extends LivingCreature{

 mul() {
        this.multiply++;
        if (this.multiply >= 5) {
            let fundCords = this.getDirections(0);
            let cr = random(fundCords);
            if (cr) {
                let x = cr[0];
                let y = cr[1];
                let norXot = new Grass(x, y);
                xotArr.push(norXot);
                matrix[y][x] = 1;
                this.multiply = 0;
            }
        }
    }
}