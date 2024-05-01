let numero = 101; // Inicia a busca a partir de 101
let contagemPrimos = 0;

while (contagemPrimos < 50) {
    let ehPrimo = true;
    for (let i = 2, raiz = Math.sqrt(numero); i <= raiz; i++) {
        if (numero % i === 0) {
            ehPrimo = false;
            break;
        }
    }
    if (ehPrimo) {
        console.log(numero);
        contagemPrimos++;
    }
    numero++;
}
