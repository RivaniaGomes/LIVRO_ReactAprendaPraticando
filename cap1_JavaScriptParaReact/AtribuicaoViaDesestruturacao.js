// ATRIBUICAO VIA DESESTRUTURACAO => Trata-se de um recurso que simplifica o acesso aos dados contidos em arrays ou objetos, criando-se variáveis que armazenam os dados.

console.log("DESESTRUTURACAO DE UM ARRAY ------------------------------------");

const livros = ["CSS3", "HTML5", "JavaScript", "React"];

let [css, html5, js, react] = livros; // aqui a desestruturaçao
console.log(css); //CSS3
console.log(react); // React

console.log("DESESTRUTURACAO DE UM OBJETO -----------------------------------");

const livros1 = [
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
    autor: "Maurício Samy Silva!",
  },
];

let [lUm, lDois, lTres] = livros1;
console.log(lUm.titulo); //Construindo Sites com HTML
console.log(lTres.autor); //Maurício Samy Silva!