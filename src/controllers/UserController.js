const users = require('../mocks/users');
class UserController {
  listUsers(request, response) {
    const { order } = request.query;

    const sortedUsers = users.sort((a, b) => {
      if (order === 'desc') {
        return a.id < b.id ? 1 : -1;
      }

      return a.id > b.id ? 1 : -1;
    })

    response.writeHead(200, { 
      'Content-Type': 'application/json',
    });
    response.end(JSON.stringify(sortedUsers));
  }

  getUserById(request, response) {
    response.writeHead(200, { 
      'Content-Type': 'application/json',
    });
    response.end(JSON.stringify({ ok: true }));
  }
}

module.exports = new UserController();
