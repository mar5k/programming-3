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
    matrix = data.matrix;
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
}