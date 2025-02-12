// Ordenar um array de números 
// Ordene um array de números do menor para o maior.

const numeros = [30, 5, 20, 10];
// Saída esperada: [5, 10, 20, 30]


const ordercres = (numbers) => {
    return numbers.sort((a, b) => a -b)
}

console.log(ordercres(numeros));


// Ordene um array de números do maior para o menor.
// Saída esperada: [ 30, 20, 10, 5 ]

const orderdecres = (numbers) => {
    return numbers.sort((a, b) => b - a)
}

console.log(orderdecres(numeros));