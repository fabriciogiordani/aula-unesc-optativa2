#NodeJS


## Requisição via browser

Arquivo app.js

```
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

### Express

Instalando o express:

```
npm install --save express
```

Obs.: É necessário ter inicializado o projeto npm.

Usando express:

```
// Instancia o ExpressJS
var express = require("express");

// Criando a execução do express
var app = express();

// Analisando as rotas
app.get('/', 
    function(req, res){
        res.send("Página principal");
    }
); // Para página princial

app.get('/tecnologia', 
    function(req, res){
        res.send("Página de tecnologia");
    }
);// Para uma página de tecnologia.

// Instanciando o serviço
app.listen(3000,
    function(){
        console.log("Servidor iniciado com ExpressJS");
    }
);
```

Com ES6:

```
// Instancia o ExpressJS
var express = require("express");

// Criando a execução do express
var app = express();

// Analisando as rotas
app.get('/', (req, res) => {
        res.send("Página principal");
    }
); // Para página princial

app.get('/tecnologia', (req, res) => {
        res.send("Página de tecnologia");
    }
);// Para uma página de tecnologia.

// Instanciando o serviço
app.listen(3000, () => {
        console.log("Servidor iniciado com ExpressJS");
    }
);
```

### [Postman](https://www.getpostman.com)

Ambiente de teste/acesso de APIs.

### Javascript Database - [NeDB](https://github.com/louischatriot/nedb)

Persistência embutida ou em memória para Node.js, nw.js, Electron e browsers, 100% JavaScript, sem dependencia de binários. Essa API é um componente parte do MongoDB.

Adicionando no projeto:

```
npm install --save nedb 
```

Inicializando o banco de dados:

```
// Persistencia em arquivo
var Datastore = require('nedb'), db = new Datastore({ filename: 'path/to/datafile' });
db.loadDatabase(function (err) {    
  //Comandos
});
```


Inicializando o banco de dados:

```
// Persistencia em arquivo
var Datastore = require('nedb'), db = new Datastore({ filename: 'path/to/datafile' });
db.loadDatabase(function (err) {    
  //Comandos
});
```

Exemplo de inserção de documento:

```
var doc = { hello: 'world' //string
               , n: 5 //number
               , today: new Date() //date
               , nedbIsAwesome: true //boolean
               , notthere: null //valor null
               , notToBeSaved: undefined  // Não será salvo
               , fruits: [ 'apple', 'orange', 'pear' ] //coleção
               , infos: { name: 'nedb' } //objeto embutido
               };

db.insert(doc, function (err, newDoc) {   
  // newDoc representa o documento inserido, including its _id
});
```

Exemplo de consulta de documentos:

- Operadores de comparação: $lt, $lte, $gt, $gte, $in, $nin, $ne). 
- Operadores lógicos: $or, $and, $not and $where

```
// Buscando todos os documentos cujo atributo hello='world'
db.find({ hello: 'world' }, function (err, docs) {
  // Comandos
});
```





