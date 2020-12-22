const http = require('http');

const users = require('./mocks/users');

// Criando servidor HTTP
const server = http.createServer((request, response) => {
  console.log(`Request Method: ${request.method} | Endpoint: ${request.url}`);

  if(request.url === '/users' && request.method === 'GET'){
    response.writeHead(200, { 
      'Content-Type': 'application/json', 
    });
    response.end(JSON.stringify(users));
  }

  // Escrevendo informações no cabeçalho
  // response.writeHead(200, { 
  //   'Content-Type': 'text/html', 
  // });
  // response.end('<h1>Ola Mundo!</h1>');
});

server.listen(3001, () => {
  console.log('🔥 Server started at http://localhost:3001');
});