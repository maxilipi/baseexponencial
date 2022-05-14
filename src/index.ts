let base: number = prompt("cual es el numero");
let exponente: number = prompt("cual es el exponente");

let resultado: number = 1;

for (let i = 0; i < exponente; i++) {
  resultado = resultado * base;
}

console.log("el resultado es", resultado);
