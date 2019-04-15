# NodeJS


## Requisição via browser

Arquivo app.js

```js
// Importando a biblioteca HTTP
var http = require("http");

// Criando um servidor
var server = http.createServer(
    function (req, res) {
        // Obtem a requisição do browser
        var url = req.url;
        // Analisa a solicitação
        if (url == "/tecnologia"){
            res.end("Página de tecnologia.");     
        }
        if (url == "/noticias"){
            res.end("Página de notícias.");
        }
        res.end("Portal Geral.");
    }
);
// Criando uma porta para requisição NodeJS
server.listen("3000");

console.log("Servidor iniciado")

```

Para executar:

```
node app.js
```


## NPM

O npm é um projeto Open Source criado em 2009 com objetivo de facilitar a troca de código JavaScript, sendo usado como gerenciador de pacotes padrão do Node.js. Ao falarmos de npm podemos estar nos referindo a um destes itens:

- O repositório aberto onde ficam armazenados os pacotes
- Um cliente que permite o envio/download de código do repositório
- Um site onde é possível pesquisar informações dos pacotes e ver a documentação do npm.

O npm utiliza um arquivo de configuração chamado package.json. Este arquivo é o responsável pela configuração do projeto como o nome,a versão, atalhos de comandos que npm executa.

Inicializando um projeto npm:

```
npm init
```


### Yarn

Em outubro de 2016, o Facebook lançou o Yarn em conjunto com o Google, Exponent e Tilde, com o objetivo de tornar o processo de instalação das dependências não só mais rápido, mas também mais seguro.

No Facebook, muitos dos projetos que dependiam do npm apresentavam certos problemas, como:

- Demora no tempo de instalação
- Dependência que não possuíam a mesma versão em diversas máquinas
- A forma que o npm executa códigos das dependências de forma automática


### Usando o npm

Instalando pacotes:

```
npm install underscore
```

Instalando pacotes e salvando a dependência no package.json:

```
npm install --save underscore
```

Instalando pacotes e salvando a dependência no package.json apenas para o ambiente de desenvolvimento:

```
npm install --save-dev gulp
```

Instalando pacotes com escopo global:

```
npm install -g nodemon
```

Removendo dependencias:

```
npm uninstall --save underscore 
```

Removendo dependencias:

```
npm uninstall --save-dev gulp 
```


### Usando o nodemon

É uma ferramenta que ajuda monitora e reinicia automaticamente a aplicação quando algum arquivo é alterado.

```
npm uninstall --save-dev gulp 
```
