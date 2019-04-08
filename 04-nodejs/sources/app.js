// Importando a biblioteca HTTP
var http = require("http");
var urlParser = require("url");

// Criando um servidor
var server = http.createServer(
    function (req, res) {
        // Obtem a requisição do browser
        var url = req.url;
        console.log(url);
        // Analisa a solicitação
        if (url == "/tecnologia"){
            res.end("Página de tecnologia.");     
        }
        if (url == "/noticias"){
            res.end("Página de notícias.");
        }
        if (url.includes("/noticias")){
            console.log(urlParser.parse(req.url, true).query.aaa);
            res.end("Página de notícias.");
        }
        res.end("Portal Geral.");
    }
);
// Criando uma porta para requisição NodeJS
server.listen("3000");

console.log("Servidor iniciado")