const userModel = require("../../../schema.js");
const login = async (req, res, next) => {
  try {
    const { email, userName, password } = req.body;
    const userByEmail = await userModel.findOne({ email });
    const userByName = await userModel.findOne({ userName });
    const userExists = userByName || userByEmail;
    if (!userExists) {
      return res
        .status(404)
        .json({
          success: false,
          result: "No user was found with this details",
        });
    } else {
      const userDetails = userByEmail ? userByEmail : userByName;
      const password_is_correct = password === userDetails.password;
      if (!password_is_correct) {
       return res.status(403).json({success:false, result:"incorrect password"})
      }
      else{
        return res.status(200).json({success:true,result:userDetails})
      }
    }
  } catch (error) {
    return res.status(500).json({ success: false, result: error.message });
  }
};

module.exports=login