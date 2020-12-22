const users = require('../mocks/users');

class UserController {
  listUsers(request, response){
    response.writeHead(200, { 
      'Content-Type': 'application/json',
    });
    response.end(JSON.stringify(users));
  }
}

module.exports = new UserController();
