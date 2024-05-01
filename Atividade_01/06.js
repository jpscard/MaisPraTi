let A = 8;
let B = 8;
let C = 8;
if (A < B + C && B < A + C && C < A + B) {
    if (A === B && B === C) {
        console.log("Triângulo Equilátero");
    } else if (A === B || A === C || B === C) {
        console.log("Triângulo Isósceles");
    } else {
        console.log("Triângulo Escaleno");
    }
} else {
    console.log("Os valores fornecidos não podem formar um triângulo.");
}
