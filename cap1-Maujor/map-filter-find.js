// MAP / FILTER => tem 3 parametros, sendo eles: 1 - funcao callback (obrigatorio); 2 - indice do item ( opcional); 3 - objeto original.

console.log("EXEMPLO MAP 1 -------------------------------------");

const livros0 = ["CSS3", "JavaScript", "PHP", "HTML", "React"];

let livros1 = livros0.map((livro) => "Livro" + livro);
let livros2 = livros0.map((livro, index) => "Livro" + index + " " + livro);

console.log(livros0);
console.log(livros1); // novo array criado pela funcao map
console.log(livros2); // novo array criado pela funcao map

console.log("EXEMPLO MAP 2 -------------------------------------");

const livrosA = [
  {
    titulo: "Construindo Sites com HTML",
    autor: "Maurício Samy Silva",
  },
  {
    titulo: "Web Scraping com Python",
    autor: "Ryan Mitchell",
  },
  {
    titulo: "CSS3",
    autor: "Maurício Samy Silva",
  },
];

let livrosX = livrosA.map((livro) => "Livro: " + livro.titulo);
let livrosY = livrosA.map((livro) => "Autor: " + livro.autor);

console.log(livrosA);
console.log(livrosX); // novo array criado pela funcao map
console.log(livrosY); // novo array criado pela funcao map

console.log("EXEMPLO FILTER 1 -------------------------------------");

const livros = [
  {
    titulo: "Construindo Sites com HTML",
    autor: "Maurício Samy Silva",
  },
  {
    titulo: "Web Scraping com Python",
    autor: "Ryan Mitchell",
  },
  {
    titulo: "CSS3",
    autor: "Maurício Samy Silva",
  },
];

let livros11 = livros.filter((livro) => livro.titulo === "CSS3");
let livros22 = livros.filter((livro) => livro.autor === "Maurício Samy Silva");
let livros33 = livros.filter((livro) => livro.titulo.includes("com"));

console.log(livros11);
console.log(livros22); 
console.log(livros33);

console.log("EXEMPLO FIND 1 -------------------------------------");

const livrosAA = [
  {
    id: 1,
    titulo: "Construindo Sites com HTML",
  },
  {
    id:  2,
    titulo: "Web Scraping com Python"
  },
  {
    id: 3,
    titulo: "CSS3",
  },
];

let livros1A = livrosAA.find((livro) => livro.id === 3);

console.log(livros1A);
console.log(livros1A.titulo); 
