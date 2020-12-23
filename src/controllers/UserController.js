let users = require('../mocks/users');
class UserController {
  listUsers(request, response) {
    const { order } = request.query;

    const sortedUsers = users.sort((a, b) => {
      if (order === 'desc') {
        return a.id < b.id ? 1 : -1;
      }

      return a.id > b.id ? 1 : -1;
    })

    response.send(200, sortedUsers);
  }

  getUserById(request, response) {
    const { id } = request.params;

    const user = users.find((user) => user.id === Number(id));

    if (!user) {
      return response.send(400, { error: 'user not found' });
    }

    response.send(200, user);
  }

  createUser(request, response) {
    const { name } = request.body;
    const lastUserId = users[users.length - 1].id;

    const newUser = {
      id: lastUserId + 1,
      name,
    };

    users.push(newUser);

    response.send(200, newUser);
  }

  updateUser(request, response) {
    const { name } = request.body;
    let { id } = request.params;

    id = Number(id);

    const userExists = users.find((user) => user.id === id);

    if(!userExists) {
      return response.send(400, { error: 'user not found' });
    }

    users = users.map((user) => {
      if(user.id === id) {
        return {
          ...user,
          name,
        }
      }
      return user;
    })

    response.send(200, { id, name });
  }
}

module.exports = new UserController();
