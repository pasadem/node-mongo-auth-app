const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please provide an Email!"],
    unique: [true, "Email Exist"],
  },
  //id: {},
  /* position: {
    type: String,
  }, */
  password: {
    type: String,
    required: [true, "Please provide a password!"],
    unique: false,
  },
  //img: {},
});

module.exports = mongoose.model("Users", UserSchema);
