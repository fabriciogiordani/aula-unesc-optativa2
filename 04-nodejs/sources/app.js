var Datastore = require('nedb')
  , db = new Datastore({ filename: './database.db' });
db.loadDatabase(function (err) {    // Callback is optional
  // Now commands will be executed
});

// Instancia o ExpressJS
var express = require("express");

// Criando a execução do express
var app = express();

// Analisando as rotas
app.get('/', async (req, res) => {
    var doc = { hello: 'worldsdsdsdsd'
               , n: 5
               , today: new Date()
               , nedbIsAwesome: true
               , notthere: null
               , notToBeSaved: undefined  // Will not be saved
               , fruits: [ 'apple', 'orange', 'pear' ]
               , infos: { name: 'nedb' }
               };

db.insert(doc, function (err, newDoc) {   // Callback is optional
  // newDoc is the newly inserted document, including its _id
  // newDoc has no key called notToBeSaved since its value was undefined
  console.log('salvo');
});

// Finding all planets in the solar system
let docs = await db.find({ hello: 'worldsdsdsdsd' });
console.log(docs);

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