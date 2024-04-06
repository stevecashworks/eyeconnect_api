const userModel=require("../../../schema.js")


const register=async(req,res)=>{
 try{
const newUser=await userModel.create(req.body)
return res.status(201).json({success:true,result:newUser})
 }catch(err){
  return res.status(500).json({success:false, result:err.message})
 }
}
module.exports=register