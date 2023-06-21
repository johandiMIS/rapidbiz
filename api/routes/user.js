const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')
const { body, validationResult } = require("express-validator");
const User = require("../models/User");
const { v4: uuidv4 } = require("uuid");
const auth = require('../middleware/auth')

require("dotenv").config();

// @route       GET /api/user
// @desc        Get user by Id
// @access      public

router.get("/", auth,async (req, res) => {
  const userid = req.user.userid

  try{
    const user = await User.findOne({userid:userid}).select('-password')
    res.json(user)
  } catch (err){
    console.error(err.message);
    res.status(500).send(err.message);
  }
});

// @route       POST /api/user
// @desc        Register new user
// @access      public

router.post(
  "/",
  [
    body("username").exists().withMessage("Please input username"),
    body("email").isEmail().withMessage("Invalid email address"),
    body("password")
      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 characters long")
      .matches(/[a-z]/)
      .withMessage("Password must contain at least one lowercase letter")
      .matches(/[A-Z]/)
      .withMessage("Password must contain at least one uppercase letter")
      .matches(/[0-9]/)
      .withMessage("Password must contain at least one number")
      .matches(/[!@#$%^&*]/)
      .withMessage(
        "Password must contain at least one special character (!@#$%^&*)"
      ),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()){
      return res.status(400).json({errors:errors.array()})
    }

    const { username, email, password } = req.body;

    try {
      // check name exists
      const checkName = await User.findOne({
        username,
      });
      if (checkName) {
        return res.status(400).json({errors:errors.array()})
      }

      // check email exists
      const checkEmail = await User.findOne({email});
      if (checkEmail) {
        return res.status(400).json({errors:errors.array()})
      }

      // create mongo data
      const newUser = new User({
        userid: uuidv4(),
        username,
        email,
        password,
      });

      // encrypt password
      const salt = await bcrypt.genSalt(10);
      newUser.password = await bcrypt.hash(password, salt);

      // insert to mongo
      await newUser.save();

      const payload = {
        user: {
          userid: newUser.userid,
        },
      };

      jwt.sign(
        payload,
        process.env.JWTSecret,
        {
          expiresIn: "24h",
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send(err.message);
    }
  }
);

module.exports = router;
