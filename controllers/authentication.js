const User = require("../models/user");

exports.signup = function(req, res, nex) {
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email: email }, function(err, exisitingUser) {});
};
