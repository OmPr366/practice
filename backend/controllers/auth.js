const User = require("../models/user");
const shortId = require("shortid");
const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");

exports.signup = (req, res) => {
  User.findOne({ email: req.body.email }).exec((error, user) => {
    if (user) {
      return res.status(400).json({ error: "Email id Already Taken" });
    }

    const { name, email, password } = req.body;

    let username = shortId.generate();
    let profile = `${process.env.CLIENT_URL}/profile/${username}`;

    let newUser = new User({
      username,
      name,
      email,
      hashed_pass: password,
      profile,
    });

    newUser.save((err, success) => {
      if (err) {
        return res.status(400).json({ error: err });
      }
      return res.json({ message: "Successfilly Posted" });
    });
  });
};

exports.signin = (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email }).exec((error, user) => {
    if (error || !user) {
      return res.json({ error: "User Creadential Don't Match" });
    }

    if (!user.authenticate(password)) {
      return res.status(422).json({ error: "Wrong Password" });
    }

    // Creating Json Web token
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.cookie("token", token, { expiresIn: "1d" });
    const { _id, username, name, email } = user;

    return res.json({
      token,
      user,
    });
  });
};

exports.signout = (req, res) => {
  res.clearCookie("token");

  res.json({
    message: "Signout Successfully",
  });
};

// exports.requireSignin  =  expressJwt({
//     secret: process.env.JWT_SECRET
// })
exports.requireSignin = expressJwt({
  secret: process.env.JWT_SECRET,
  algorithms: ["HS256"], // added later
  userProperty: "auth",
});
