# Exercícios

Implemente os exercícios abaixo utilizando o TS.ED

## Exercício 1 - Criar um api com express para calcular o IMC (peso * (altura * altura))?

Altere o código a seguir para utilizar o método `forEach` de modo que a saída permaneça a mesma.

``` json
GET /api/imc/:peso/:altura
```

## Exercício 2 - Utilizando a api free [https://currencyconverterapi.com](https://currencyconverterapi.com) implemente um API para fazer a conversão de valores

Para utilização deve ser criada uma chave e executada uma url semalhante a essa:

```
https://free.currencyconverterapi.com/api/v6/convert?apiKey=sample-api-key&q=USD_BRL
```

Faça a requisição utilizando a biblioteca [axios](https://github.com/axios/axios)

``` json
GET /api/conversormonetario/:moedaOrigem/:moedaDestino?valor=10.5
```

* :moedaOrigem - Sigla da moeda de origem
* :moedaDestino - Sigla da moeda de destino
* valor - parametro de url para passar o valor a ser convertido

Retorno:

```json
{
    "moedaOrigem": "BRL",
    "moedaDestino": "BRL",
    "valor": "10.5",
    "valorConvertido": "39.9"
}
```