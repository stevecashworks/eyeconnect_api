const express= require("express")
const login = require("./controllers/login")
const register = require("./controllers/register")
const getAllUsers = require("./controllers/getAllUsers")
const editUser = require("./controllers/editUser")
const verify=require("./controllers/verify")
const loginWithToken=require("./controllers/loginWithToken")
const userRoute= express.Router()

userRoute.post("/login",login)
userRoute.post("/register", register)
userRoute.post("/edit", editUser)
userRoute.post("/token",verify,loginWithToken)
userRoute.get("/", getAllUsers)


module.exports=userRoute
