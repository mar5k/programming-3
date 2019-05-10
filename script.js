let side = 25;
let matrix = [];
let xotArr = [];
let eatArr = [];
let vohmak = [];
let xumb = [];
let legal = [];
let burundukner = [];
let bardzrutyun = 38;
let layn = 80;
let grassCount = 327;
let eatGrassCount = 181;
let gayleriqanak = 51;
let vq = 6;
let mil = 4;
let pnduk = 1;

for (let i = 0; i < bardzrutyun; i++) {
    matrix.push([]);
    for (let j = 0; j < layn; j++) {
        matrix[i].push(0);
    }
}
function setup() {
    noStroke();
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background("gray");
    let n = 0;
    while (n < grassCount) {
        let x = Math.floor(random(0, layn));
        let y = Math.floor(random(0, bardzrutyun));
        if (matrix[y][x] == 0) {
            matrix[y][x] = 1;
            n++;
        }
    }
    let m = 0;
    while (m < eatGrassCount) {
        let x = Math.floor(random(0, layn));
        let y = Math.floor(random(0, bardzrutyun));
        if (matrix[y][x] == 0) {
            matrix[y][x] = 2;
            m++;
        }
    }
    let k = 0;
    while (k < gayleriqanak) {
        let x = Math.floor(random(0, layn));
        let y = Math.floor(random(0, bardzrutyun));
        if (matrix[y][x] == 0) {
            matrix[y][x] = 3;
            k++;
        }
    }
    let t = 0;
    while (t < vq) {
        let x = Math.floor(random(0, layn));
        let y = Math.floor(random(0, bardzrutyun));
        if (matrix[y][x] == 0) {
            matrix[y][x] = 4;
            t++;
        }
    }
    let w = 0;
    while (w < mil) {
        let x = Math.floor(random(0, layn));
        let y = Math.floor(random(0, bardzrutyun));
        if (matrix[y][x] == 0) {
            matrix[y][x] = 5;
            w++;
        }
    }
    let p = 0;
    while (p < pnduk) {
        let x = Math.floor(random(0, layn));
        let y = Math.floor(random(0, bardzrutyun));
        if (matrix[y][x] == 0) {
            matrix[y][x] = 6;
            p++;
        }
    }


    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 2) {
                let eatgrass = new Eatgrass(x, y);
                eatArr.push(eatgrass);
            } else if (matrix[y][x] == 1) {
                let grass = new Grass(x, y);
                xotArr.push(grass);
            } else if (matrix[y][x] == 3) {
                let gayl = new Gishatich(x, y);
                vohmak.push(gayl);
            } else if (matrix[y][x] == 4) {
                let vorsord = new Vorsord(x, y);
                xumb.push(vorsord);
            } else if (matrix[y][x] == 5) {
                let votre = new Police(x, y);
                legal.push(votre);
            } else if (matrix[y][x] == 6) {
                let norskyur = new Krcox(x, y);
                burundukner.push(norskyur);
            }
        }
    }

}
function draw() {
    background("gray");
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == 1) {
                fill("green");
            } else if (matrix[i][j] == 2) {
                fill("yellow");
            } else if (matrix[i][j] == 0) {
                fill("gray");
            } else if (matrix[i][j] == 3) {
                fill("red");
            } else if (matrix[i][j] == 4) {
                fill("purple");
            } else if (matrix[i][j] == 5) {
                fill("blue");
            } else if (matrix[i][j] == 6) {
                fill("black");
            }
            rect(j * side, i * side, side, side);
        }
    }
    for (let i in xotArr) {
        xotArr[i].mul();
    }
    for (let i in eatArr) {
        eatArr[i].eat();
    }
    for (let i in vohmak) {
        vohmak[i].eat();
    }
    for (let i in xumb) {
        xumb[i].eat();
    }
    if(legal.length > 0 ){
        for (let i in legal) {
        legal[i].eat();
        }
    }
    if(burundukner.length > 0 ){
        for (let i in burundukner) {
        burundukner[i].eat();
        }
    }
}