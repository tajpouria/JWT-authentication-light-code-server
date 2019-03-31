const authentication = require("./controllers/authentication");
const passportService = require("./services/passport");
const passport = require("passport");

const requireAuth = passport.authenticate("jwt", { session: false });
const requireSingIn = passport.authenticate("local", { session: false });

module.exports = function(app) {
  app.get("/", requireAuth, function(req, res) {
    res.send({ hi: "there" });
  });
  app.post("/signin", requireSingIn, authentication.signin);
  app.post("/signup", authentication.signup);
};
