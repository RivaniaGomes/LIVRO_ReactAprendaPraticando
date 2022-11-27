// a nova sintese preve o uso do sinal de crase (`) para envolver uma string

console.log("EXEMPLO 1 -------------------------------------");

const livro = `Livro 'React' do "Majour"`;
console.log(livro);

console.log("-------------------------------------")

const livro1 = `Livro 'React' do "Majour"`;
console.log(livro1);

console.log("-------------------------------------")

const marcacao = `<!DOCTYPE html>
<html>
<head>
  <meta charset='utf-8'>
  <meta http-equiv='X-UA-Compatible' content='IE=edge'>
  <title>Page Title</title>
  <meta name='viewport' content='width=device-width, initial-scale=1'>
  <link rel='stylesheet' type='text/css' media='screen' href='main.css'>
  <script src='main.js'></script>
</head>
<body>
  
</body>
</html>`

console.log(marcacao);

console.log("EXEMPLO 2 -------------------------------------");

const titulo = `Livro React do "Majour"`;
const preco = 80;

const mensagem = `O preco normal do ${titulo} é de R$${preco},00
Na promocao o preço cai para R$${preco * 0.8},00`;

console.log(mensagem);