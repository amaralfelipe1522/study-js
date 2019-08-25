const express = require('express');
const app = express();
app.listen(3000, function(){console.log('Express funfando')});

app.get ('/', function(req, resp) {
    resp.send(
        `
            <html>
                <head>
                    <meta charset="utf-8">
                </head>
                <body>
                    <h1> Casa do Código </h1>
                </body> 
            </html>
        `
    );
});

app.get ('/livros', function(req, resp) {
    resp.send(
        `
            <html>
                <head>
                    <meta charset="utf-8">
                </head>
                <body>
                    <h1> Catálogo de Livros </h1>
                </body> 
            </html>
        `
    );
});