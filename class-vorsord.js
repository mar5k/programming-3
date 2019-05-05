class Vorsord {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiply = 0;
        this.directions = [];

    }
    newDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
        ];
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
    getDirections(t) {
        this.newDirections();
        let found = [];
        for (let i in this.directions) {
            let x = this.directions[i][0];
            let y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == t) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
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
    eat() {
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
        if (this.multiply >= 47) {
            this.mul();
            this.multiply = 0;
        } else {
            this.move();
        }
    }
}
