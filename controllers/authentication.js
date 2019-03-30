const User = require("../models/user");

exports.signup = function(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email: email }, function(err, exisitingUser) {
    if (err) return next(err);
    if (exisitingUser) {
      return res
        .status(422)
        .send("Unprocessable Entity: The user with given email in use");
    }
    const user = new User({
      email: email,
      password: password
    });
    user.save(function(err) {
      if (err) return next(err);
    });
    res.json(user);
  });
};
