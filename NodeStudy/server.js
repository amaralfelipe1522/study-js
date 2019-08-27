const app = require('./src/config/custom-express');
app.listen(3000, function(){console.log('Express funfando')});

// Nodemon
// Existem várias ferramentas que nos possibilitam esse tipo de procedimento. No mundo Node, uma das mais conhecidas é o módulo nodemon.

// Para instalarmos esse módulo, digitaremos o comando npm install nodemon@1.18.4 --save-dev -save-exact. Dessa forma, estaremos fixando a versão do módulo desejado e salvando-o como uma dependência de desenvolvimento da nossa aplicação - ou seja, não precisaremos dele para executar a aplicação, somente para desenvolvê-la.

// Finalizado o processo de instalação, o Node irá inserir no package.json uma seção chamada devDependencies, listando somente o nodemon na versão especificada.

// De volta ao terminal, executaremos novamente o npm, mas de maneira diferente:

// npm install -g nodemon@1.18.4 --save-exact
// Dessa vez, estamos indicando que queremos instalar o módulo nodemon de maneira global - ou seja, para todo o sistema operacional -, de modo que possamos utilizá-lo a partir do Prompt de Comando. Terminada a instalação, estaremos aptos a rodar nossa aplicação por meio desse módulo, utilizando o comando nodemon server.js.


