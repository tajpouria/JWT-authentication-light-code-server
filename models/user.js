const mongoose = require("mongoose");

const userSchema = new mongoose.Schame({
  email: {
    type: String,
    lowercase: true,
    unique: true
  },
  password: String
});

const ModelClass = mongoose.model("user", userSchema);

module.exports = ModelClass;