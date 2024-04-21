const mongoose=require('mongoose');
 const Schema=  new mongoose.Schema({
    name:{
        type:String,
        required:true,
        
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    prescriptions:{
            type:[{
                startDate:Date,
                endDate:Date,
                doctor:String,
                prescription_text:String

            }], 
            default:[]
            
    },
    appointments:{
        type:[
        {
            date:Date,
            doctor:{
                id:String,
                name:String,
                profession:String,
            }
        }
    ],
    default:[]
}
   

 })
 module.exports= mongoose.model('users',Schema)