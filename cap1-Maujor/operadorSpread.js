// SPREAD => consiste em expandir um Array, um objeto ou uma String. O simbolo para esse operador é constituído por três pontos (...)

const livros1 = [ "CSS3", "JavaScript", "PHP"];
const livros2 = [ "HTML", "React"];
const precos = [ 70, 30, 90, 100, 10];

console.log("EXEMPLO 1 -------------------------------------");

let livrosA = livros1 + livros2;
console.log(livrosA); //Resultado uma string

console.log("EXEMPLO 2 -------------------------------------");

let livrosB = [livros1] + [livros2];
console.log(livrosB); //Resultado uma string

console.log("EXEMPLO 3 -------------------------------------");

let livrosC = [...livros1, ...livros2];
console.log(livrosC); //Resultado um array com os cinco livros esperados

console.log("EXEMPLO 4 -------------------------------------");

let precoMaximo = Math.max(precos);
console.log(precoMaximo); // Resultado mensagem informando que o parametro preco não é um número

console.log("EXEMPLO 5 -------------------------------------");

let precoMaximo1 = Math.max(...precos);
console.log(precoMaximo1); // Resultado o valor maximo constante do array de preços