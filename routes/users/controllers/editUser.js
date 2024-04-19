const userModel= require("../../../schema.js")

const editUser=async(req,res)=>{
try {
    const {email}=req.body
    const updatedUser=await userModel.findOneAndUpdate({email},{$set:req.body}, {new:true})
return res.status(200).json({success:true, result:updatedUser})
} catch (error) {
    return res.status(500).json({success:true,result:error.message})
}
}
// testing to find if this connects
module.exports=editUser