const UserModel = require("../../models/users.model");
const mailgun = require("mailgun-js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const SECRET_KEY = "NOTESAPI";

console.log(process.env.MAILGUN_APIKEY, "process.env.MAILGUN_APIKEY");

const signup = async (req, res) => {
  const { firstname, lastname, email, password } = req.body;
  try {
    const existingUser = await UserModel.findOne({ email: email });
    console.log(existingUser);
    if (existingUser != null) {
      return res.status(400).json({ message: "user alread exist" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);
    const result = await UserModel.create({
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: hashedPassword,
      is_admin: 0,
    });
    const token = jwt.sign({ email: result.email, id: result._id }, SECRET_KEY);
    res.status(201).json({ user: result, token: token });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "something went wrong" + err });
  }
};
const signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await UserModel.findOne({ email: email });
    if (existingUser) {
      const matchpassword = await bcrypt.compare(
        password,
        existingUser.password
      );
      if (matchpassword) {
        const token = jwt.sign(
          { email: existingUser.email, id: existingUser._id },
          SECRET_KEY
        );
        res.status(201).json({ user: existingUser, token: token });
      } else {
        return res.status(400).json({ message: "invalid credentials" });
      }
    } else {
      return res.status(404).json({ message: "user not found" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "something went wrong" + err });
  }
};

const getrecord = async (req, res, next) => {
  try {
    const data = await UserModel.findOne();
    res.status(201).json({ user: data });
  } catch (e) {
    res.status(500).json({
      message: "something went wrong" + e,
    });
  }
};

const getrecordbyID = async (req, res, next) => {
  try {
    const { id } = req.params;
    const items = await UserModel.findOne({ _id: id });
    return res.send({
      success: true,
      message: "Items fetched successfully",
      payload: items,
    });
  } catch (error) {
    return next(error);
  }
};

//forgot password
const forgotpassword = async (req, res) => {
  const { email } = req.body;

  const checkemail = await UserModel.find({ email: email });
  if (checkemail != null) {
    console.log(checkemail);
  }
  console.log(checkemail);
  console.log(email);

  const token = jwt.sign(
    { _id: checkemail._id },
    `${process.env.MAILGUN_APIKEY}`,
    { expiresIn: "20m" }
  );

  console.log(token);

  const apiKey = "5e77bc59b043050927df0412154a404a-cc9b2d04-482fb924";
  const domain = "sandbox2e2b6b20d24f4da7960064c03d7b7278.mailgun.org";

  const mailgun = require("mailgun-js")({ domain, apiKey });

  mailgun
    .messages()
    .send({
      from: `test@${domain}`,
      to: "sairaamjad321@gmail.com",
      subject: "Hello from Mailgun",
      text: "This is a test",
      html: `<h1>plz click the given link to reset your password</h1>
       <p>${process.env.CLIENT_URL}/resetpassword/${token}</p>`,
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

// const resetpassword=async (req, res,next) => {
//    const user= await client.find({email})
//    if(!user){
//     return res.status(400).json({message:"email doest not exists", status:"error"})
//    }
//    }

// const generatedToken=bcrypt.randomBytes(32);
// if(!generatedToken){
//     return res.status(500).json
//     ({message:"an error occured.plz try again",
//     status: "err"
//  })
// }
// const convertTokenToHexString= generatedToken.toString("hex");

// client.resetToken= convertTokenToHexString
// client.expireToken= Date.now() + 1800000

///////////////Contact Form /////////////////////
const contactForm = async (req, res) => {
  const apiKey = "5e77bc59b043050927df0412154a404a-cc9b2d04-482fb924";
  const domain = "sandbox2e2b6b20d24f4da7960064c03d7b7278.mailgun.org";

  const mailgun = require("mailgun-js")({ domain, apiKey });

  const { email, subject, message } = req.body;
  mailgun
    .messages()
    .send({
      from: `test@${domain}`,
      to: `${email}`,
      subject: ` ${subject}`,
      message: `${message}`,
      html: `<h1> thanks for contact/h1>`,
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

module.exports = {
  signup,
  signin,
  getrecord,
  getrecordbyID,
  forgotpassword,
  contactForm,
};
