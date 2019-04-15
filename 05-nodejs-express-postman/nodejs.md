# NodeJS

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

Passando parâmetro na url

```javascript
// Ex.: http://127.0.0.1:3000/api/clientes/123
app.get('/api/clientes/:id', (req, res) => {
  res.send("ID: " + req.params.id);
});
```

Passando parâmetro na rota

```javascript
// Ex.: http://127.0.0.1:3000/api/clientes?id=123
app.get('/api/clientes', (req, res) => {
  res.send("ID: " + req.query.id);
});
```

### [Postman](https://www.getpostman.com)

Ambiente de teste/acesso de APIs.

### Framework e integrações - [TS.ED](https://tsed.io)

[TS.ED](tsed.md)

# [REST](https://www.restapitutorial.com/)


| HTTP        | Operação           |   |
| ------------- |:-------------:| -----:|
| POST      | criação | /api/clientes |
| GET      | consulta      |   /api/clientes/1 |
| GET      | consulta      |   /api/clientes/1/pedidos |
| GET      | consulta      |   /api/clientes/1/pedidos/1 |
| PUT | atualização      |   /api/clientes/1 |
| PATH | atualização      |    /api/clientes/1 |
| DELETE | exclusão     |    /api/clientes/1 |

