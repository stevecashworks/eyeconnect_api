const userModel = require("../../../schema.js");
const login = async (req, res, next) => {
  try {
    const { email, userName, password } = req.body;
    const thisUser = await userModel.findOne({ email });
    
  
    if (!thisUser) {
      return res
        .status(404)
        .json({
          success: false,
          result: "No user was found with this details",
        });
    } else {
      
      const password_is_correct = password === thisUser.password;
      if (!password_is_correct) {
       return res.status(403).json({success:false, result:"incorrect password"})
      }
      else{
        return res.status(200).json({success:true,result:thisUser})
      }
    }
  } catch (error) {
    return res.status(500).json({ success: false, result: error.message });
  }
};

module.exports=login