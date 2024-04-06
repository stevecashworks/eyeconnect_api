const userModel=require("../../../schema.js")

const getAllUsers=async(req,res)=>{
    try {
        const allUsers= await userModel.find()
        return res.status(200).json({success:true, result:allUsers})

    } catch (error) {
        return res.status(500).json({success:false, result:error.message})
    }
}
module.exports=allUsers