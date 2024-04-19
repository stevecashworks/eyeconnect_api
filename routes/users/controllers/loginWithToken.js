const userSchema= require("../../../schema.js")
const loginWithToken=async(req, res,next)=>{

try {
const { id } = req.user;
const thisUser = await userSchema.findById(id);
if (thisUser) {
  return res.status(200).json({ success: true, result: thisUser });
} else {
  return res.status(404).json({ success: false, result: "User not found" });
}
   


} catch (error) {
   return res.status(500).json({success:false,result:error.message})
}
  
}
module.exports=loginWithToken