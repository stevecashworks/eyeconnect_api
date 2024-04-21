const doctorSchema = require("../../../doctorSchema")


const get_all_doctors=async(req,res,next)=>{
    try {
         const all_doctors= await doctorSchema.find()
         return res.status(200).json({success:true, result : all_doctors})
    } catch (error) {
        return  res.satus(500).json({success:false, resultL:error.message})
    }
}
module.exports=get_all_doctors