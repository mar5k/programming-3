bardzrutyun = 38;
layn = 80;

matrix = [];

xotArr = [];
eatArr = [];
vohmak = [];
xumb = [];
legal = [];
burundukner = [];

let random = require('./modules/random.js');
function matrixMaker(grassCount, eatGrassCount, gayleriqanak, vq, mil, pnduk) {

    for (let i = 0; i < bardzrutyun; i++) {
        matrix.push([]);
        for (let j = 0; j < layn; j++) {
            matrix[i].push(0);
        }
    }

    let n = 0;
    while (n < grassCount) {
        let x = Math.floor(random(layn));
        let y = Math.floor(random(bardzrutyun));
        if (matrix[y][x] == 0) {
            matrix[y][x] = 1;
            n++;
        }
    }
    let m = 0;
    while (m < eatGrassCount) {
        let x = Math.floor(random(layn));
        let y = Math.floor(random(bardzrutyun));
        if (matrix[y][x] == 0) {
            matrix[y][x] = 2;
            m++;
        }
    }
    let k = 0;
    while (k < gayleriqanak) {
        let x = Math.floor(random(layn));
        let y = Math.floor(random(bardzrutyun));
        if (matrix[y][x] == 0) {
            matrix[y][x] = 3;
            k++;
        }
    }
    let t = 0;
    while (t < vq) {
        let x = Math.floor(random(layn));
        let y = Math.floor(random(bardzrutyun));
        if (matrix[y][x] == 0) {
            matrix[y][x] = 4;
            t++;
        }
    }
    let w = 0;
    while (w < mil) {
        let x = Math.floor(random(layn));
        let y = Math.floor(random(bardzrutyun));
        if (matrix[y][x] == 0) {
            matrix[y][x] = 5;
            w++;
        }
    }
    let p = 0;
    while (p < pnduk) {
        let x = Math.floor(random(layn));
        let y = Math.floor(random(bardzrutyun));
        if (matrix[y][x] == 0) {
            matrix[y][x] = 6;
            p++;
        }
    }
}
matrixMaker(327, 181, 38, 6, 4, 1);


var Grass = require('./modules/grass-class');
var Eatgrass = require('./modules/grasseater-class');
var Gishatich = require('./modules/gishatich-class');
var Vorsord = require('./modules/vorsord-class');
var Krcox = require('./modules/krcox-class');
var Police = require('./modules/police-class')

var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);


app.use(express.static("."));

app.get('/', function (req, res) {
    res.redirect('./index.html');
});

server.listen(3000, () => {
    console.log('Running on port 3000')
});


function objmaker() {
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
objmaker();

//Events 

io.on("connection", function (socket) {
    socket.on("pushkrcox", function () {
        var n = 0;
        while (n < 2) {
            let x = Math.floor(random(layn));
            let y = Math.floor(random(bardzrutyun));
            if (matrix[y][x] == 0) {
                matrix[y][x] = 6;
                var krc = new Krcox(x, y);
                burundukner.push(krc);
                n++;
            }
        }
    })
    socket.on("killkrcox", function () {
        burundukner = [];
        for (var y = 0; y < bardzrutyun; y++) {
            for (var x = 0; x < layn; x++) {
                if (matrix[y][x] == 6)
                    matrix[y][x] = 0;
            }
        }
    })
    socket.on("change", function () {
        vohmak = [];
        for (var y = 0; y < bardzrutyun; y++) {
            for (var x = 0; x < layn; x++) {
                if (matrix[y][x] == 3) {
                    matrix[y][x] = 5;
                    var polo = new Police(x, y);
                    legal.push(polo);
                }
            }
        }
    })
    socket.on("addg", function () {
        var n = 0;
        while (n < 13) {
            let x = Math.floor(random(layn));
            let y = Math.floor(random(bardzrutyun));
            if (matrix[y][x] == 0) {
                matrix[y][x] = 3;
                var gish = new Gishatich(x, y);
                vohmak.push(gish);
                n++;
            }
        }
    })
    socket.on("earth", function () {
        for (var y = 0; y < bardzrutyun; y++) {
            for (var x = 0; x < layn; x++) {
                if (((y + x) % 2) == 0) {
                    if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                        if (matrix[y][x] == 1) {
                            for (var i in xotArr) {
                                if (x == xotArr[i].x && y == xotArr[i].y) {
                                    xotArr.splice(i, 1);
                                    break;
                                }
                            }
                        }
                        else if (matrix[y][x] == 2) {
                            for (var i in eatArr) {
                                if (x == eatArr[i].x && y == eatArr[i].y) {
                                    eatArr.splice(i, 1);
                                    break;
                                }
                            }
                        }
                        else if (matrix[y][x] == 3) {
                            for (var i in vohmak) {
                                if (x == vohmak[i].x && y == vohmak[i].y) {
                                    vohmak.splice(i, 1);
                                    break;
                                }
                            }
                        }
                        else if (matrix[y][x] == 4) {
                            for (var i in xumb) {
                                if (x == xumb[i].x && y == xumb[i].y) {
                                    xumb.splice(i, 1);
                                    break;
                                }
                            }
                        }
                        else if (matrix[y][x] == 5) {
                            for (var i in legal) {
                                if (x == legal[i].x && y == legal[i].y) {
                                    legal.splice(i, 1);
                                    break;
                                }
                            }
                        }
                        else if (matrix[y][x] == 6) {
                            for (var i in burundukner) {
                                if (x == burundukner[i].x && y == burundukner[i].y) {
                                    burundukner.splice(i, 1);
                                    break;
                                }
                            }
                        }
                        matrix[y][x] = 7;
                    }
                }
            }
        }
    })
    socket.on("vo", function () {
        var n = 0;
        while (n < 5) {
            let x = Math.floor(random(layn));
            let y = Math.floor(random(bardzrutyun));
            if (matrix[y][x] == 0 || matrix[y][x] == 1) {
                matrix[y][x] = 4;
                var nvors = new Vorsord(x, y);
                xumb.push(nvors);
                n++;
            }
        }
    })
    socket.on("gro", function () {
        var n = 0;
        while (n < 1) {
            let x = Math.floor(random(layn));
            let y = Math.floor(random(bardzrutyun));
            if (matrix[y][x] == 0) {
                matrix[y][x] = 1;
                var newgr = new Grass(x, y);
                xotArr.push(newgr);
                n++;
            }
        }
    })
    socket.on("kill", function () {
        for (var y = 0; y < bardzrutyun; y++) {
            for (var x = 0; x < layn; x++) {
                if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                    if (matrix[y][x] == 2 && eatArr.length > 20) {
                        for (var i in eatArr) {
                            if (x == eatArr[i].x && y == eatArr[i].y) {
                                eatArr.splice(i, 20);
                                break;
                            }
                        }
                    }
                }
                matrix[y][x] = 0;
            }
        }
    })
});
var changeseason = 0;
var season;

function game() {

    changeseason++;

    if (changeseason < 20) {
        season = "summer";
    }
    else if (changeseason >= 20 && changeseason <= 40) {
        season = "winter";
    }
    else {
        changeseason = 0;

    }

    if (xotArr[0] !== undefined) {
        for (var i in xotArr) {
            if (season === "summer") {
                xotArr[i].mul(3);
            }
            else if (season === "winter") {
                xotArr[i].mul(10);
            }
        }
    }

    if (eatArr[0] !== undefined) {
        for (var i in eatArr) {
            if (season === "summer") {
                eatArr[i].eat(7);
            }
            else if (season === "winter") {
                eatArr[i].eat(18);
            }
        }
    }

    if (vohmak.length > 0) {
        for (let i in vohmak) {
            vohmak[i].eat(5);
        }
    }
    if (xumb.length > 0) {
        for (let i in xumb) {
            xumb[i].eat(17);
        }
    }
    if (legal.length > 0) {
        for (let i in legal) {
            legal[i].eat();
        }
    }
    if (burundukner.length > 0) {
        for (let i in burundukner) {
            burundukner[i].eat();
        }
    }

    let sendData = {
        matrix: matrix,
        sendseason: season
    }

    io.sockets.emit("data", sendData);

}

setInterval(game, 500);