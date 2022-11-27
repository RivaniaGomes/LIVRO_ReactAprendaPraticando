let saudacao = () => "Olá visitante";

console.log( saudacao() );

console.log("-------------------------------------")

let saudacao2 = () => (
  "Olá visitante!!!!"
);

console.log( saudacao2() );

console.log("-------------------------------------")

let dobrar = (x) => 2 * x;

console. log ( dobrar (5) );

console.log("-------------------------------------")

let dobrar2 = (x) => {
  return 2 * x;
};

console.log( dobrar (3) );

console.log("-------------------------------------")

let avaliar = ( x, y, z) => x < 10 ? y + z : y * z;

console.log( avaliar(18, 15, 5) );
console.log( avaliar(2, 3, 11));

console.log("-------------------------------------")

let avaliar2 = (x, y, z) => (
  x < 10
  ? y + z
  : y * z
);

console.log( (x => 2 * x ) (40) );
console.log("-------------------------------------")