const userModel = require("../../../schema.js");
const jwt = require("jsonwebtoken");


const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const thisUser = await userModel.findOne({ email });

    if (!thisUser) {
      return res.status(404).json({
        success: false,
        result: "No user was found with this details",
      });
    } else {
      const password_is_correct = password === thisUser.password;
      if (!password_is_correct) {
        return res
          .status(403)
          .json({ success: false, result: "incorrect password" });
      } else {
        const token = await jwt.sign({id:thisUser._id}, process.env.jwt_pass)
        return res.status(200).json({ success: true, result: {...thisUser._doc, token} });
      }
    }
  } catch (error) {
    return res.status(500).json({ success: false, result: error.message });
  }
};

module.exports = login;
