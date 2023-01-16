// exports.authenticate = async (req, res, next) => {
//     next();
// }

const jwt = require("jsonwebtoken");
const SECRET_KEY = "NOTESAPI";

const auth = (req, res, next) => {
  try {
    let token = req.headers.authorization;
    if (token) {
      let token1 = token.split(" ")[1];
      let user = jwt.verify(token1, SECRET_KEY);
      // req.userId = user.Id;

      next();
    } else {
      return res.status(401).json({ message: "unauthorize user" });
    }
  } catch (err) {
    console.log(err);
    return res.status(401).json({ message: "unauthorize user" });
  }
};
module.exports = auth;
