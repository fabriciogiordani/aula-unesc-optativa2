# Correção

## Exercício 1 - Par ou ímpar?
``` javascript
var numeros = [0,1,2,3,4,5];
numeros.forEach(function(numero){
    if(numero % 2 === 0) {
        console.log(numero + ' é par');
    } else {
        console.log(numero + ' é ímpar');
    }
});
```

## Exercício 2 - Quero o dobro
``` javascript
function dobrar(numeros) {
    return numeros.map(function(numero){
        return numero * 2;
    });
}
```

## Exercício 3 - Caixa alta
``` javascript
function caps(palavras) {
    return palavras.map(function(palavra){
        return palavra.toUpperCase();
    });
}
```

## Exercício 4 - Reprovado!
``` javascript
function aprovados(alunos, media) {
  return alunos.filter(function(aluno){
    return aluno.media >= media;
  });
}
```

## Exercício 5 - Dados precisos
``` javascript
function buscar(propriedade, valor, lista) {
  return lista.find(function(item) {
    return item[propriedade] === valor;
  });
}
```

## Exercício 6 - Calculadora Humana
``` javascript
function calculaAreaTotal(dimensoes) {
  return dimensoes.reduce(function(anterior, valor) {
    return anterior + (valor.altura * valor.comprimento);    
  }, 0);
}
```

## Exercício 7 - Raízes Quadradas
``` javascript
function calculaRaizesQuadradas(numeros) {
  return numeros.map(function(numero) {
    return Math.sqrt(numero);
  });
}
```

## Exercício 8 - Limpando o estoque
``` javascript
function existeProdutosDatados(produtos, data) {
  var dataReferencia = new Date();
  if(data) dataReferencia = new Date(data);
  return produtos.some(function(produto) {
    return new Date(produto.dataValidade) < dataReferencia;
  });
}
```

## Exercício 9 - Distância
``` javascript
function calculaDistancia(ruas) {
  var iteradorRuas = ruas[Symbol.iterator]();
  var distanciaTotal = 0;
  var rua = iteradorRuas.next();
  do {
    distanciaTotal += rua.value.tamanho;
    rua = iteradorRuas.next();
  }
  while (!rua.done);

  return distanciaTotal;
}
```

## Exercício 10 - Endereço completo
``` javascript
function montaEnderecoCompleto(rua, cidade, numero, cep) {
  return `${rua}, ${numero} - ${cidade}, ${cep}`;
}
```

## Exercício 11 - Arrow Functions
``` javascript
let imprimeProduto = (nome,preco) => {
  console.log(`Produto: ${nome} | Preço: ${preco}`);
};
```

## Exercício 12 - Arrow Functions 2
``` javascript
let itens = ['abacaxi', 'banana', 'maçã', 'laranja', 'limão'];
itens.forEach(item => console.log(item));
```

## Exercício 13 - Pegando a propriedade na lata
``` javascript
const {email, nome, idade} = usuario;
```

## Exercício 14 - Classes e Objetos
``` javascript
class VideoGame {
  constructor(marca, nControles, tipoMidia) {
    this.marca = marca;
    this.nControles = nControles;
    this.tipoMidia = tipoMidia;
  }
}

let playstation = new VideoGame('sony', '2', 'dvd');
console.log(playstation);
// { marca: 'sony', nControles: '2', tipoMidia: 'dvd' }
```

## Exercício 15 - Parâmetros padrão
``` javascript
function soma(a = 0, b = 0) {
  return a + b;
}
```

## Exercício 16 - Parâmetros padrão 2
``` javascript
function imprimeNomeCompleto(nome = '', sobrenome='', nomeDoMeio='') {
  console.log(`${nome} ${nomeDoMeio} ${sobrenome}`);
}

imprimeNomeCompleto('João'); // João
```

