const doctorSchema = require("../../../doctorSchema")

const addDoctor=async(req,res,next)=>{
    try {

        const newDoctor=await doctorSchema.create(req.body)
        return res.status(200).json({success:true, result:newDoctor})
        
    } catch (error) {
        res.status(500).json({success:false, result:error.message})
    }
}

module.exports = addDoctor