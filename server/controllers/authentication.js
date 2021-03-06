const User = require("../models/user");
const jwt = require("jwt-simple");
const config = require("../config");

function giveUserToken(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

exports.signin = function(req, res, next) {
  res.send({ token: giveUserToken(req.user) });
};

exports.signup = function(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    return res.status(422).send("Email and password must be provided");
  }

  User.findOne({ email: email }, function(err, exisitingUser) {
    if (err) return next(err);
    if (exisitingUser) {
      return res
        .status(422)
        .send("Unprocessable Entity: The user with given email in use.");
    }
    const user = new User({
      email: email,
      password: password
    });
    user.save(function(err) {
      if (err) return next(err);
    });
    res.json({ token: giveUserToken(user) });
  });
};
