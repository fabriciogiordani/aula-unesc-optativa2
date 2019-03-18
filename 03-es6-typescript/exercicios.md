# Exercícios

* Para execução dos exercícios pode ser utilizado o [repl.it](https://repl.it/languages/javascript) ou VSCode com nodejs
* [JavaScript and HTML DOM Reference](https://www.w3schools.com/jsref/)
* [Especificação Oficial do ES6](https://www.ecma-international.org/ecma-262/6.0)

## Exercício 1 - Par ou ímpar?
Altere o código a seguir para utilizar o método `forEach` de modo que a saída permaneça a mesma.

``` javascript
var numeros = [0,1,2,3,4,5];
for(var i = 0; i<= numeros.length; i++) {
    if(i % 2 === 0) {
        console.log(i + ' é par');
    } else {
        console.log(i + ' é ímpar');
    }
}

// saída:
// 0 é par
// 1 é ímpar
// 2 é par
// 3 é ímpar
// 4 é par
// 5 é ímpar
```

## Exercício 2 - Quero o dobro
Utilizando o método `map`, escreva o método `dobrar` que recebe um array de números inteiros e retorna um array com todos os valores do array original dobrados.

* Exemplo: dobrar([1,2,3]) → [2,4,6]

## Exercício 3 - Caixa alta
Escreva o método `caps` que recebe um array de strings e retorna um outro array com todas as strings do array original em CAIXA ALTA.

* Exemplo: caps(['oi', 'tudo', 'bem?']) → ['OI', 'TUDO', 'BEM?']

## Exercício 4 - Reprovado!
Dada uma lista de objetos que contém o nome de um aluno e sua média final, crie o método 'aprovados' que recebe esta lista e retorna somente os alunos que foram aprovados.

Para isto, utilize o método `filter`.

``` javascript
var alunos = [
  { nome: 'Diogo', media: 5.5 },
  { nome: 'Julia', media: 9.5 },
  { nome: 'Roberto', media: 1.5 },
  { nome: 'Tiago', media: 6.0 }
];
```

* Exemplo: aprovados(alunos, 6.5) → [ { nome: 'Julia', media: 9.5 } ]

## Exercício 5 - Dados precisos
Crie uma função `buscar` que recebe três parâmetros:
- propriedade: Nome da propriedade no objeto
- valor: Valor da propriedade no objeto
- lista: Lista de objetos onde a busca deve ser executada

Dado estes parâmetros, a função deve buscar na lista e retornar o registro que possui a propriedade com o valor especificado.

Utilize o método `find`.

``` javascript
var lista = [
    { nome: 'Tânia', sobrenome: 'Cardoso', idade: 65 },
    { nome: 'Emilly', sobrenome: 'Barbosa', idade: 46 },
    { nome: 'Vitória', sobrenome: 'Costa', idade: 83 },
    { nome: 'Erick', sobrenome: 'Ferreira', idade: 16 }
]
```

* Exemplo: buscar('nome', 'Tânia', lista) → { nome: 'Tânia', sobrenome: 'Cardoso', idade: 65 }

## Exercício 6 - Calculadora humana
Crie uma função `calculaAreaTotal` que recebe um parâmetro:
- dimensoes: objeto que possui as propriedades `altura` e `comprimento` que são números inteiros

A função deve retornar a soma de todas as áreas.
Tome como base a entrada a seguir:

``` javascript
var dimensoes = [
  { altura: 10, comprimento: 20},
  { altura: 2, comprimento: 4},
  { altura: 1, comprimento: 1},
  { altura: 50, comprimento: 50}
]
```

* Exemplo: calculaAreaTotal(dimensoes) → 2709

## Exercício 7 - Raízes quadradas
Crie uma função chamada `calculaRaizesQuadradas` que recebe um array de números inteiros positivos e devolve um outro array com as raízes quadradas correspondentes de cada um dos itens.

* para este exercício, assuma que a entrada terá somente números com raiz exata.
* utilize a função Math.sqrt para calcular a raiz quadrada

## Exercício 8 - Limpando o estoque
Crie um método chamado `existeProdutosDatados` que recebe um parâmetro chamado `produtos` que é um array de `produtos` e identifica se há algum produto que está acima da data de validade. Caso existe, deve voltar `true`, caso contrário, `false`. Cada produto tem as seguintes características:
- nome: String que representa o nome do produto
- preco: Número que representa o preço do produto
- dataValidade: Data de validade do produto

O método também deve aceitar um segundo parâmetro `dataReferencia`. Se passado, o método deve fazer a comparação de validade em relação a ele, caso contrário, utiliza a data da execução como parâmetro.

Tome como exemplo os produtos a seguir:
``` javascript
var produtos = [
  { nome:'Cereal', preco:'10', dataValidade:'21/02/2017' },
  { nome:'Suco de Abacaxi', preco:'12', dataValidade:'01/01/2017' },
  { nome:'Torta de frango', preco:'25', dataValidade:'07/07/2017' }
]
```

* Exemplo: existeProdutosDatados(produtos, '2017-03-01') → true
* existeProdutosDatados(produtos,'2016-01-01') → false

## Exercício 9 - Distância
Implemente uma função chamada `calculaDistancia` que recebe uma lista de objetos que representam ruas e faça a soma de seus tamanhos. Cada objeto `rua` da lista possui as seguintes propriedades:
- nome: String que representa o nome da rua
- tamanho: Número intero que representa a comprimento da rua em metros

Utilize somente os conceitos que foram apresentados neste capítulo para iterar as `ruas`. Assuma que sempre haverá pelo menos uma rua no array.

Tome como exemplo, a entrada abaixo.
``` javascript
var ruas = [
  { nome:'Rua 1', tamanho: 2500 },
  { nome:'Rua 2', tamanho: 3400 },
  { nome:'Rua 3', tamanho: 1400 }
];
```

* Exemplo: calculaDistancia(ruas) → 7300

## Exercício 10 - Endereço completo
Implemente o método `montaEnderecoCompleto` que recebe os seguites parâmetros:
- rua: String que reprenta o nome de uma rua
- cidade: String que representa o nome de uma cidade
- numero: Inteiro que representa o número da casa
- cep: String que representa o CEP de um endereço

O método deve retornar uma única string com esses dados no seguinte formato:
<rua>, <numero> - <cidade>, <cep>

Lembre-se de respeitar as vírgulas e os espaços!

## Exercício 11 - Arrow Functions
Refatorar a função `imprimeProduto` para utilizar arrow functions. Não deixe de customizar o método para utilizar templates strings.
``` javascript
let carrinho = [
    { nome: 'abacaxi', preco: '2.00' },
    { nome: 'detergente', preco: '2.50' },
    { nome: 'bolacha', preco: '3.80' }
]

carrinho.forEach(function(produto) {
    imprimeProduto(produto.nome, produto.preco);
})

function imprimeProduto(nome, preco) {
    console.log('Produto: ' + nome + ' | ' + 'Preço: ' + preco);
}
```

## Exercício 12 - Arrow Functions 2
Refatore o código a seguir para utilizar arrow functions:
``` javascript
let itens = ['abacaxi', 'banana', 'maçã', 'laranja', 'limão'];
itens.forEach(function(item) {
    console.log(item);
})
```

## Exercício 13 - Pegando a propriedade na lata
Refatore o trecho de código a seguir para utilizar a técnica de desestruturamento.

``` javascript
const email = usuario.email;
const nome = usuario.nome;
const idade = usuario.idade
```

## Exercício 14 - Classes e Objetos
Refatore o código a seguir para que declaração do objeto `VideoGame` seja uma classe de acordo com o ES6. Não se esqueça de criar o construtor e invocar um objeto desta classe.

``` javascript
function VideoGame(marca, nControles, tipoMidia) {
  this.marca = marca;
  this.nControles = nControles;
  this.tipoMidia = tipoMidia;
}

var playstation = new VideoGame('sony', '2', 'dvd');
console.log(playstation);
// { marca: 'sony', nControles: '2', tipoMidia: 'dvd' }
```

## Exercício 15 - Parâmetros padrão
Refatore o código a seguir utilizando parâmetros padrão de função.

``` javascript
function soma(a,b) {
  if(a === undefined) {
    a = 0;
  }
  if(b === undefined) {
    b = 0;
  }

  return a + b;
}
```

## Exercício 16 - Parâmetros padrão 2
Refatore o código a seguir de modo a remover as variáveis `sobrenomeTratado` e `nomeDoMeioTratado`.

``` javascript
function imprimeNomeCompleto(nomeTratado, sobrenome, nomeDoMeio) {
  let nomeTratado = nomeTratado || '';
  let sobrenomeTratado = sobrenome || '';
  let nomeDoMeioTratado = nomeDoMeio || '';

  console.log(`${nomeTratado} ${nomeDoMeioTratado} ${sobrenomeTratado}`);
}

imprimeNomeCompleto('João'); // João
```

---

[Correção](exercicios-correcao.md)