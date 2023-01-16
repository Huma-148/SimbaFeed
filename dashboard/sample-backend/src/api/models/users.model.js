const mongoose = require("mongoose");

/**
 * User Schema
 * @private
 */
const UserSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    is_admin: {
      // admin -1   and user=0 and bydefualt value set 0
      type: String,
      required: false,
    },

    resetToken: {
      type: String,
      required: false,
    },
    expireToken: {
      data: String,
      required: false,
    },
  },
  { timestamps: true }
);
/**
 * @typedef User
 */

module.exports = mongoose.model("User", UserSchema);
