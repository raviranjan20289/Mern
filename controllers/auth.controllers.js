const User = require("../models/user.models");
const bcrypt = require("bcrypt");
exports.register = async (req, res) => {
  try {
    const { Username, Email, Phone, Password } = req.body;

    const userExists = await User.findOne({ Email: Email });

    if (userExists) {
      return res.status(400).json({ msg: "User already exists" });
    }

    // const saltRound = 10;
    // const hash_password = await bcrypt.hash(Password, saltRound);

    const userCreated = await User.create({
      Username,
      Email,
      Phone,
      Password,
    });
    console.log(userCreated);
    res.status(201).json({ msg: userCreated });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Server Error" });
  }
};
