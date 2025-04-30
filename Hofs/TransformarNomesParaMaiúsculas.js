// Transformar nomes para maiúsculas 
// Dado um array de nomes, transforme todos para letras maiúsculas.

const nomes = ["ana", "joão", "maria"];
// Saída esperada: ["ANA", "JOÃO", "MARIA"]



const newNames = (names) => {
    return names.map((e) => e.toUpperCase());
}


console.log(newNames(nomes));
