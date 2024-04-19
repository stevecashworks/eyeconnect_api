const userSchema= require("../../../schema.js")
const loginWithToken=async(req, res,next)=>{
const {id}=req.user
const ThisUser=await userSchema.findById(id)
if(ThisUser){
   return res.status(200).json({success:true, result:thisUser})
}else{
     return res.status(404).json({ success: false, result: "User not found" });

}
  
}
module.exports=loginWithToken