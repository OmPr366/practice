const { check } = require("express-validator");

exports.userSignupValidator = [
  check("name").not().isEmpty().withMessage("Name is Required"),
  check("email").isEmail().withMessage("Enter valid email address"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
];

exports.userSigninvalidator = [
  check("email").isEmail().withMessage("Enter Valid EmailId"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),

]
