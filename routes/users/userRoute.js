const express= require("express")
const login = require("./controllers/login")
const register = require("./controllers/register")
const userRoute= express.Router()

userRoute.post("/login",login)
userRoute.post("/register", register)


module.exports=userRoute
