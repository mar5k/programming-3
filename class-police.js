class Police {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.directions = [];
        this.directions_1 = [];
    }
    newDirections_1() {
        this.directions_1 = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
            [this.x - 2, this.y - 2],
            [this.x - 1, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 1, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x + 2, this.y - 1],
            [this.x + 2, this.y],
            [this.x + 2, this.y + 1],
            [this.x + 2, this.y + 2],
            [this.x + 1, this.y + 2],
            [this.x, this.y + 2],
            [this.x - 1, this.y + 2],
            [this.x - 2, this.y + 2],
            [this.x - 2, this.y + 1],
            [this.x - 2, this.y],
            [this.x - 2, this.y - 1],
        ];

    }
    getDirections_1(t) {
        this.newDirections_1();
        let found = [];
        for (let i in this.directions_1) {
            let x = this.directions_1[i][0];
            let y = this.directions_1[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == t) {
                    found.push(this.directions_1[i]);
                }
            }
        }
        return found;
    }
    move() {

        let fundCords = this.getDirections_1(0);
        let ff = this.getDirections_1(1);
        let kk = this.getDirections_1(2);
        let dd = this.getDirections_1(3);
        let c = random(fundCords);
        let kt = random(ff);
        let k3 = random(kk);
        let k4 = random(dd);

        if (c) {
            let x = c[0];
            let y = c[1];

            matrix[y][x] = 5;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;
        } else if (kt) {
            let x = kt[0];
            let y = kt[1];

            matrix[y][x] = 5;
            matrix[this.y][this.x] = 1;

            this.x = x;
            this.y = y;

        } else if (k3) {
            let x = k3[0];
            let y = k3[1];

            matrix[y][x] = 5;
            matrix[this.y][this.x] = 2;

            this.x = x;
            this.y = y;

        } else if (k4) {
            let x = k4[0];
            let y = k4[1];

            matrix[y][x] = 5;
            matrix[this.y][this.x] = 3;

            this.x = x;
            this.y = y;
        }

    }

    eat() {
        let foundCords = this.getDirections_1(4);
        let cd = random(foundCords);
        if (cd) {
            let x = cd[0];
            let y = cd[1];

            matrix[y][x] = 1;
            matrix[this.y][this.x] = 0;
                
            let ggggrass = new Grass(x, y);
            xotArr.push(ggggrass);
        
            this.x = x;
            this.y = y;

            for (let j in xumb) {
                if (x == xumb[j].x && y == xumb[j].y) {
                    xumb.splice(j, 1);

                }
            }
            for (let j in legal) {
                if (x == legal[j].x && y == legal[j].y) {
                    legal.splice(j, 1);

                }
            }

        } else {
            this.move();

        }
    }
}