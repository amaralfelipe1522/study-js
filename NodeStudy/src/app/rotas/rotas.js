const db = require('../../config/database');
const LivroDAO = require('../infra/livro-dao')

module.exports = (app) => {
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
        const livroDao = new LivroDAO(db);
        livroDao.lista ()
            .then (livros => resp.marko(require('../views/livros/listagem/lista.marko'),
                {
                    // livros : livros
                    // ou
                    livros
                }
                )
            )
            .catch (erro => console.log(erro));
    });
}