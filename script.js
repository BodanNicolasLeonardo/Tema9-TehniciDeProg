const matriceA = [
    [{ val: 1, col: "#00ff00" }, { val: 2, col: "#cccccc" }, { val: 3, col: "#6699cc" }],
    [{ val: 8, col: "#444444" }, { val: 9, col: "#9999ff" }, { val: 10, col: "#e6c300" }],
    [{ val: 15, col: "#f7bfbf" }, { val: 16, col: "#90ee90" }, { val: 17, col: "#778899" }]
];

const matriceB = [
    [{ val: 5, col: "#ff00ff" }, { val: 6, col: "#d2691e" }, { val: 7, col: "#cd5c5c" }],
    [{ val: 12, col: "#cce5ff" }, { val: 13, col: "#ffe066" }, { val: 14, col: "#ff9999" }],
    [{ val: 19, col: "#fff2cc" }, { val: 20, col: "#ff6666" }, { val: 21, col: "#d9e3e3" }]
];

let matriceProdus = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    calculInmultire();
}

function calculInmultire() {
    for (let i = 0; i < 3; i++) {
        let rand = [];
        for (let j = 0; j < 3; j++) {
            let suma = 0;
            for (let k = 0; k < 3; k++) {
                suma += matriceA[i][k].val * matriceB[k][j].val;
            }
            let culoare = color(
                random(100, 255),
                random(100, 255),
                random(100, 255)
            ).toString();
            rand.push({ val: suma, col: culoare });
        }
        matriceProdus.push(rand);
    }
}

function draw() {
    background("#eeeeee");

    desenMatrici(matriceA, 50, 100);
    desenMatrici(matriceB, 300, 100);
    desenMatrici(matriceProdus, 550, 100);

    textSize(40);
    text("×", 250, 170); 
    text("=", 500, 170);
}

function desenMatrici(matrice, xStart, yStart) {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            let cell = matrice[i][j];
            fill(cell.col);
            rect(xStart + j * 50, yStart + i * 50, 45, 45);

            fill(0);
            textSize(16);
            textAlign(CENTER, CENTER);
            text(cell.val, xStart + j * 50 + 22, yStart + i * 50 + 22);
        }
    }
}
