bardzr = 36;
layn = 108;

matrix = [];

xotArr = [];
eatArr = [];
gishArr = [];
vorsArr = [];
polArr = [];
krcArr = [];

//Matrix Maker Function

var random = require('./modules/random.js');

function matrixMaker(grassCount, eatGrassCount, gishCount, vorsCount, polCount, krcCount) {

    for (var i = 0; i < bardzr; i++) {
        matrix.push([]);
        for (var j = 0; j < layn; j++) {
            matrix[i].push(0);
        }
    }

    var n = 0;
    while (n < grassCount) {
        var x = Math.floor(random(layn));
        var y = Math.floor(random(bardzr));
        if (matrix[y][x] == 0) {
            matrix[y][x] = 1;
            n++;
        }
    }
    var m = 0;
    while (m < eatGrassCount) {
        var x = Math.floor(random(layn));
        var y = Math.floor(random(bardzr));
        if (matrix[y][x] == 0) {
            matrix[y][x] = 2;
            m++;
        }
    }
    var k = 0;
    while (k < gishCount) {
        var x = Math.floor(random(layn));
        var y = Math.floor(random(bardzr));
        if (matrix[y][x] == 0) {
            matrix[y][x] = 3;
            k++;
        }
    }
    var t = 0;
    while (t < vorsCount) {
        var x = Math.floor(random(layn));
        var y = Math.floor(random(bardzr));
        if (matrix[y][x] == 0) {
            matrix[y][x] = 4;
            t++;
        }
    }
    var w = 0;
    while (w < polCount) {
        var x = Math.floor(random(layn));
        var y = Math.floor(random(bardzr));
        if (matrix[y][x] == 0) {
            matrix[y][x] = 5;
            w++;
        }
    }
    var p = 0;
    while (p < krcCount) {
        var x = Math.floor(random(layn));
        var y = Math.floor(random(bardzr));
        if (matrix[y][x] == 0) {
            matrix[y][x] = 6;
            p++;
        }
    }
}
matrixMaker(327, 181, 38, 6, 4, 1);

//Modules and Requires

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
var fs = require('fs');


app.use(express.static("."));

app.get('/', function (req, res) {
    res.redirect('./index.html');
});

server.listen(3000, () => {
    console.log('No ERROR Running')
});

//Object Maker Function

function objmaker() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 2) {
                var eatgrass = new Eatgrass(x, y);
                eatArr.push(eatgrass);
            } else if (matrix[y][x] == 1) {
                var grass = new Grass(x, y);
                xotArr.push(grass);
            } else if (matrix[y][x] == 3) {
                var gayl = new Gishatich(x, y);
                gishArr.push(gayl);
            } else if (matrix[y][x] == 4) {
                var vorsord = new Vorsord(x, y);
                vorsArr.push(vorsord);
            } else if (matrix[y][x] == 5) {
                var votre = new Police(x, y);
                polArr.push(votre);
            } else if (matrix[y][x] == 6) {
                var norskyur = new Krcox(x, y);
                krcArr.push(norskyur);
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
            var x = Math.floor(random(layn));
            var y = Math.floor(random(bardzr));
            if (matrix[y][x] == 0 || matrix[y][x] == 1) {
                matrix[y][x] = 6;
                var krc = new Krcox(x, y);
                krcArr.push(krc);
                n++;
            } else {
                continue;
            }
        }
    })
    socket.on("killkrcox", function () {
        krcArr = [];
        for (var y = 0; y < bardzr; y++) {
            for (var x = 0; x < layn; x++) {
                if (matrix[y][x] == 6) {
                    matrix[y][x] = 0;
                } else {
                    continue;
                }
            }
        }
    })
    socket.on("change", function () {
        gishArr = [];
        for (var y = 0; y < bardzr; y++) {
            for (var x = 0; x < layn; x++) {
                if (matrix[y][x] == 3) {
                    matrix[y][x] = 5;
                    var polo = new Police(x, y);
                    polArr.push(polo);
                } else {
                    continue;
                }
            }
        }
    })
    socket.on("addg", function () {
        var n = 0;
        while (n < 13) {
            var x = Math.floor(random(layn));
            var y = Math.floor(random(bardzr));
            if (matrix[y][x] == 0) {
                matrix[y][x] = 3;
                var gish = new Gishatich(x, y);
                gishArr.push(gish);
                n++;
            } else if (matrix[y][x] == 1) {
                continue;
            } else {
                break;
            }
        }
    })
    socket.on("earth", function () {

        for (var y = 0; y < bardzr; y++) {
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
                            for (var i in gishArr) {
                                if (x == gishArr[i].x && y == gishArr[i].y) {
                                    gishArr.splice(i, 1);
                                    break;
                                }
                            }
                        }
                        else if (matrix[y][x] == 4) {
                            for (var i in vorsArr) {
                                if (x == vorsArr[i].x && y == vorsArr[i].y) {
                                    vorsArr.splice(i, 1);
                                    break;
                                }
                            }
                        }
                        else if (matrix[y][x] == 5) {
                            for (var i in polArr) {
                                if (x == polArr[i].x && y == polArr[i].y) {
                                    polArr.splice(i, 1);
                                    break;
                                }
                            }
                        }
                        else if (matrix[y][x] == 6) {
                            for (var i in krcArr) {
                                if (x == krcArr[i].x && y == krcArr[i].y) {
                                    krcArr.splice(i, 1);
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
            var x = Math.floor(random(layn));
            var y = Math.floor(random(bardzr));
            if (matrix[y][x] == 0 || matrix[y][x] == 1) {
                matrix[y][x] = 4;
                var nvors = new Vorsord(x, y);
                vorsArr.push(nvors);
                n++;
            }
        }
    })
    socket.on("xotaker", function () {
        var n = 0;
        while (n < 5) {
            var x = Math.floor(random(layn));
            var y = Math.floor(random(bardzr));
            if (matrix[y][x] == 0 || matrix[y][x] == 1) {
                matrix[y][x] = 2;
                var norxotaker = new Eatgrass(x, y);
                eatArr.push(norxotaker);
                n++;
            }
        }
    })
    socket.on("gro", function () {
        var n = 0;
        while (n < 1) {
            var x = Math.floor(random(layn));
            var y = Math.floor(random(bardzr));
            if (matrix[y][x] == 0) {
                matrix[y][x] = 1;
                var newgr = new Grass(x, y);
                xotArr.push(newgr);
                n++;
            } else if (matrix[y][x] = 1) {

                break;
            } else {

                continue;
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
                xotArr[i].mul(5);
            }
            else if (season === "winter") {
                xotArr[i].mul(11);
            }
        }
    }

    if (eatArr[0] !== undefined) {
        for (var i in eatArr) {
            if (season === "summer") {
                eatArr[i].eat(7);
            }
            else if (season === "winter") {
                eatArr[i].eat(17);
            }
        }
    }

    if (gishArr.length > 0) {
        for (var i in gishArr) {
            gishArr[i].eat(5);
        }
    }
    if (vorsArr.length > 0) {
        for (var i in vorsArr) {
            vorsArr[i].eat(14);
        }
    }
    if (polArr.length > 0) {
        for (var i in polArr) {
            polArr[i].eat();
        }
    }
    if (krcArr.length > 0) {
        for (var i in krcArr) {
            krcArr[i].eat();
        }
    }

    var sendData = {
        matrix: matrix,
        sendseason: season
    }

    io.sockets.emit("data", sendData);

}

setInterval(game, 650);


var myObjStatic = {    };

setInterval(function(){
    myObjStatic.xArr = xotArr.length;
    myObjStatic.eArr = eatArr.length;
    myObjStatic.gArr = gishArr.length;
    myObjStatic.vArr = vorsArr.length;
    myObjStatic.pArr = polArr.length;
    myObjStatic.kArr = krcArr.length;

    fs.writeFileSync("statistics.json", JSON.stringify(myObjStatic));
}, 50);