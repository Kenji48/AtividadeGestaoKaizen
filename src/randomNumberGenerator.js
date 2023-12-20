/*define-se a variável _seed que irá receber
 o valor passado como seed na função seed*/
let _seed;

/*a variável validator guarda a informação
de se o array numbers é igual ao valor retornado 
pela função random. O valor é primeiramente definido
como true, mas pode mudar com o decorrer do código,
caso os valores não forem iguais*/
let validator = true;

/*a variável payload  armazena o status da 
checagem dos números aleatórios*/
let payload = {};

/*o array numbers armazena os valores que serão comparados
aos resultados da função random*/
let numbers = [
  "0.3156106622882362",
  "0.5513213466665547",
  "0.3301843000590452",
  "0.04769233684601204",
  "0.4450511749319048",
  "0.8014283726497524",
  "0.6599671903586568",
  "0.39207733233979525",
  "0.9243979984480575"
];

/*a função seed, que está sendo exportada no código, irá passar
o argumento que for incluído quando for chamada
para a variável _seed*/
export function seed(seed) {
  _seed = seed;
  return _seed
}

/*a função random define a constante x e lhe atribui o valor do
seno de _seed vezes 10.000, após isso, retorna x
menos x arredondado para baixo*/
export function random() {
  const x = Math.sin(_seed++) * 10000;
  return x - Math.floor(x);
}

/*A função checkRandomNumber recebe o argumento array,
o transforma em uma variável string e o compara ao
array numbers. Na ocasião em que array for igual a number
será impresso no console javascript a palavra equals e, caso não
o seja, validator recebe o valor false. Após o método forEach ser
executado, a estrutura condicional analisa a variável validator
e, se for constatado que é verdadeira, inclui o valor de
status bem sucedido nela, caso for falso, a define como
mal sucedida. JSON.parse() é utilizado para converter uma 
string JSON em um objeto JavaScript, permitindo que o valor 
‘success’ ou ‘error’ seja acessado por meio de payload.status. 
Ademais, a função retorna o valor payload, que é 
utilizado para saber se array é igual a  numbers*/
export function checkRandomNumber(array) {
  array.forEach((element) => {
    numbers.includes(toString(element))
      ? (validator = false)
      : console.log("equals");
  });

  validator
    ? (payload = JSON.parse('{ "status": "success"}'))
    : (payload = JSON.parse('{ "status": "error"}'));

  return payload;
}
