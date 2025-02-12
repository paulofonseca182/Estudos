// Soma dos elementos 
// Crie uma função que recebe um array de números e retorna a soma de todos os elementos.
// Saída esperada: 50

const numeros = [5, 10, 15, 20];

const soma = (numeros) => {
    return numeros.reduce((acc, n) => acc + n, 0);
}

console.log(soma(numeros));
