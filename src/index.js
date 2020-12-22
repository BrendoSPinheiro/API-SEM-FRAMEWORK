const http = require('http');

// Criando servidor HTTP
const server = http.createServer((request, response) => {
  // Escrevendo informações no cabeçalho
  response.writeHead(200, { 
    'Content-Type': 'text/html', 
  });
  response.end('<h1>Hello World!</h1>');
});

server.listen(3001, () => {
  console.log('🔥 Server started at http://localhost:3001');
});