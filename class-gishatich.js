class Gishatich {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 121;
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
            [this.x + 1, this.y + 1]
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
    eat() {
        let fundCords = this.getDirections(2);
        let cord = random(fundCords);

        if (cord) {
            let x = cord[0];
            let y = cord[1];

            matrix[y][x] = 3;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;

            this.multiply++;
            this.energy++;

            for (let i in eatArr) {
                if (x == eatArr[i].x && y == eatArr[i].y) {
                    eatArr.splice(i, 1);
                }
            }

            if (this.multiply >= 5) {
                this.mul()
                this.multiply = 0;
            }
        } else {
            this.move();
            this.energy = this.energy - 2;
            if (this.energy <= 0) {
                this.die();
            }
        }
    }
    mul() {
        let fundCords = this.getDirections(0);
        let cord = random(fundCords);

        if (cord) {
            let x = cord[0];
            let y = cord[1];
            let norGishatich = new Gishatich(x, y);
            vohmak.push(norGishatich);
            matrix[y][x] = 3;
        }
    }
    move() {
        let fundCords = this.getDirections(0);
        let cord = random(fundCords);

        if (cord) {
            let x = cord[0];
            let y = cord[1];

            matrix[y][x] = 3;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;
        }
    }
    die() {
        matrix[this.y][this.x] = 0;

        for (let i in vohmak) {
            if (this.x == vohmak[i].x && this.y == vohmak[i].y) {
                vohmak.splice(i, 1);
            }
        }
    }
}