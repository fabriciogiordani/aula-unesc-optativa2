# NodeJS

### Javascript Database - [NeDB](https://github.com/louischatriot/nedb)

Persistência embutida ou em memória para Node.js, nw.js, Electron e browsers, 100% JavaScript, sem dependencia de binários. Essa API é um componente parte do MongoDB.

Adicionando no projeto:

```
npm install --save nedb 
```

Inicializando o banco de dados:

```js
// Persistencia em arquivo
var Datastore = require('nedb'), db = new Datastore({ filename: 'path/to/datafile' });
db.loadDatabase(function (err) {    
  //Comandos
});
```


Inicializando o banco de dados:

```js
// Persistencia em arquivo
var Datastore = require('nedb'), db = new Datastore({ filename: 'path/to/datafile' });
db.loadDatabase(function (err) {    
  //Comandos
});
```

Exemplo de inserção de documento:

```js
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

```js
// Buscando todos os documentos cujo atributo hello='world'
db.find({ hello: 'world' }, function (err, docs) {
  // Comandos
});
```

#### Usando Promise

Método de um Service

```js
@Service
class ServiceDoc {
  async findDoc() {
    return new Promise((resolve, reject) => {
      // Buscando todos os documentos cujo atributo hello='world'
      db.find({ hello: 'world' }, function (err, docs) {
        if(err) {
          reject(err);
        }
        resolve(docs);
      });
    });
  }
}
```

Chamando o método do Service

```js
const result = await serviceDoc.findDoc()
```




