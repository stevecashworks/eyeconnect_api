 const {Router}= require("express")
const addDoctor = require("./controllers/addDoctor")
const get_all_doctors = require("./controllers/getAllDoctors")

 const doctorRoute= Router()

doctorRoute.post("/new", addDoctor)
doctorRoute.get("/", get_all_doctors)
 
 module.exports=doctorRoute


