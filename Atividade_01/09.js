let codigo = 10;
if (codigo === 5 || codigo === 6) {
    console.log("Sul");
} else if (codigo === 7 || codigo === 8 || codigo === 9) {
    console.log("Norte");
} else if (codigo >= 10 && codigo <= 20) {
    console.log("Leste");
} else if (codigo >= 25 && codigo <= 50) {
    console.log("Oeste");
} else {
    console.log("Fora dos Intervalos - Produto Importado");
}
