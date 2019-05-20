var socket = io();

let side = 25;
let bardzrutyun = 38;
let layn = 80;
let matrix = [];

function setup() {
    noStroke();
    frameRate(5);
    createCanvas(layn * side, bardzrutyun * side);
    background("gray");
}

socket.on("data", drawMatrix);


function drawMatrix(data) {
    background("gray");

    matrix = data.matrix;
    getseason = data.sendseason;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {

            if (matrix[i][j] == 0) {
                fill("gray");
            }
            else if (matrix[i][j] == 1) {
                if (getseason == "summer") {
                    fill("green");
                }
                else if (getseason == "winter") {
                    fill("whitesmoke");
                }
            }
            else if (matrix[i][j] == 2) {
                if (getseason == "summer") {
                    fill("yellow");
                }
                else if (getseason == "winter") {
                    fill("orange");
                }
            }
            else if (matrix[i][j] == 3) {
                if (getseason == "summer") {
                    fill("red");
                }
                else if (getseason == "winter") {
                    fill("brown");
                }
            }
            else if (matrix[i][j] == 4) {
                fill("indigo");
            }
            else if (matrix[i][j] == 5) {
                if (getseason == "summer") {
                    fill("blue");
                }
                else if (getseason == "winter") {
                    fill("teal");
                }
            }
            else if (matrix[i][j] == 6) {
                fill("black");
            }
            else if (matrix[i][j] == 7) {
                fill("brown");
            }
            rect(j * side, i * side, side, side);
        }
    }
}


function PushKrcox() {
    socket.emit("pushkrcox");
}
function KillKrcox() {
    socket.emit("killkrcox");
}
function ChangeGishatich() {
    socket.emit("change");
}
function AddGishatich() {
    socket.emit("addg");
}
function Earth() {
    socket.emit("earth");
}
function AddVorsord() {
    socket.emit("vo");
}
function AddGrass() {
    socket.emit("gro");
}
function KillEatGrass() {
    socket.emit("kill");
}