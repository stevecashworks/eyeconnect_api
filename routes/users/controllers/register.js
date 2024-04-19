const userModel=require("../../../schema.js")
const jwt = require("jsonwebtoken")

const {config}= require("dotenv")
config();

const register=async(req,res)=>{
 try{
     const newUser=await userModel.create(req.body)
     const token=jwt.sign({id:newUser._id},process.env.jwt_pass) 
return res.status(201).json({success:true,result:{...newUser, token}})
 }catch(err){
  return res.status(500).json({success:false, result:err.message})
 }
}
module.exports=register