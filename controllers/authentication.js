const User = require("../models/user");
const jwt = require("jwt-simple");
const config = require("../config");

function giveUserToken(user) {
  return jwt.encode(user.id, config.secret);
}

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
