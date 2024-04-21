const {Schema, model}= require("mongoose")

const   DoctorSchema=Schema({
    name:{
            type:String,
            required:true,
            unique:true
    },
    email:String,
    reviews:Number,
    rating:Number,
    position:String,
    location:String
})
module.exports=model("doctors", DoctorSchema)  