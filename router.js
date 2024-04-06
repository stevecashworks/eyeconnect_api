const html= require("./html.js")
const  express=require('express');
 const nodemailer=require('nodemailer');
 const newEmail="tradesavorinfo@gmail.com"
  const EmailPassword= "iytoyydtgdmkijll"

 const Router= express.Router();
 Router.route('/').post(
    (req,res)=>{
        const{email,message}=req.body
       const transporter=nodemailer.createTransport({
          service:'gmail',
          auth:{
              user:'eventsnorwood@gmail.com' /*newEmail*/,
              pass:'ldxybwgafkzoijwn'/*EmailPassword*/,

          }})
          const options={
             from:/*'eventsnorwood@gmail.com'*/"EyeConnect",
             to:email,
             subject:"Reset Password",
             text:message
    
          }
          transporter.sendMail(options,(err,info)=>{
             if(err){
                console.log(err);
                res.status(403).json({success:false})
                return;
             }else{
                console.log(info.response)
                res.status(201).json({sucess:true})
             }
          })
        }
 )
 module.exports=Router