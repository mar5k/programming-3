 var LivingCreature = require("./mclass.js")
 var random = require("./random")
module.exports = class Grass extends LivingCreature{

 mul(impo) {
        this.multiply++;
        if (this.multiply >= impo) {
            var fundCords = this.getDirections(0);
            var cr = random(fundCords);
            if (cr) {
                var x = cr[0];
                var y = cr[1];
                var norXot = new Grass(x, y);
                xotArr.push(norXot);
                matrix[y][x] = 1;
                this.multiply = 0;
            }
        }
    }
}