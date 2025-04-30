// Mapear e Transformar Objetos
// Dado um array de objetos representando produtos, use map para transformar o array,
// adicionando um campo precoComDesconto (10% de desconto)

const produtos = [
  { nome: "Teclado", preco: 200 },
  { nome: "Mouse", preco: 100 },
  { nome: "Monitor", preco: 1000 },
];
// Saída esperada: [{ nome: "Teclado", preco: 200, precoComDesconto: 180 }, ...]

const newProduct = (product) => {
  return product.map((e) => ({
    ...e,
    precoComDesconto: e.preco - e.preco * 0.1,
  }));
};

console.log(newProduct(produtos));

produtos.map((e) => {
  e.precoComDesconto = e.preco * 0.9;
});


console.log(produtos); // Modifica os objetos dentro do próprio array
