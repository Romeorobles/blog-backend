const prompt = require("prompt-sync")();

const numero1Texto = prompt("Escribe el primer número: ");
const numero1 = parseFloat(numero1Texto);

if (numero1 <= 100) {
    console.log("Consumo bajo de energía");
} else if (numero1 < 500) {
    console.log("El consumo de energía es medio");
} else {
    console.log("El consumo de energía es alto");
}