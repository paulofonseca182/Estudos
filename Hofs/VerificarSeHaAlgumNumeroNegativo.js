// Verificar se há algum número negativo
// Dado um array de números, retorne true se houver pelo menos um número negativo.

const numeros = [4, 7, -3, 9, 0];
// Saída esperada: true

const numeros2 = [4, 7, 3, 9, 0];
// Saída esperada: false


const check = (numbers) => {

    return numbers.some((e) => e < 0);
}

console.log(check(numeros))
console.log(check(numeros2))

