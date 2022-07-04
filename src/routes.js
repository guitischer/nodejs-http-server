const { listUsers } = require("./controllers/UserController");

module.exports = [
  {
    endpoint: '/users',
    method: 'GET',
    handler: listUsers
  },
]