const http = require('http');
const url = require('url');

const routes = require('./routes');

// Criando servidor HTTP
const server = http.createServer((request, response) => {
  const { pathname, query } = url.parse(request.url, true);

  console.log(`Request Method: ${request.method} | Endpoint: ${pathname}`);

  const route = routes.find((route) => (
    route.endpoint === pathname && route.method === request.method
  ));

  if (route) {
    request.query = query;

    route.handler(request, response);
  } else {
    response.writeHead(404, { 
      'Content-Type': 'text/html', 
    });
    response.end(`Cannot ${request.method} ${pathname}`);
  }
  
});

server.listen(3001, () => {
  console.log('🔥 Server started at http://localhost:3001');
});