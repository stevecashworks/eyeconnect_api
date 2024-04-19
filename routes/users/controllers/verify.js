const jwt=require("jsonwebtoken")
const {config}= require("dotenv")
config()


const verify=async(req,res,next)=>{
    const {token}= req.headers
    jwt.verify(token,process.env.jwt_pass,(err,user)=>{
        if(err){
            res.status(500).json({success:false,result:err.message})
        }
        else{
            req.user=user
            next()
        }
    })

}
module.exports=verify