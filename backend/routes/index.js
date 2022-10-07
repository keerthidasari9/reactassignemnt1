const userinfo = require('./UserInfoRouter');
const users = require('./UsersRouter');
const usersdetail = require('./UsersdetailRouter');


module.exports = {
  UserInfoRouter: userinfo,
  UsersRouter: users,
  UsersdetailRouter: usersdetail
}
