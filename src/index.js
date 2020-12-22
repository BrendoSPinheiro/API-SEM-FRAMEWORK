const http = require('http');

// Criando servidor HTTP
const server = http.createServer((request, response) => {
  response.writeHead(200, { 
    'Content-Type': 'text/html', 
  });
  response.end('<h1>Hello World!</h1>');
});