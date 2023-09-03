const express=require('express')
const {loginUser,signupUser,adminLogin,forgottenPassword,resetpassword}= require("../controllers/UserController")
const router=express.Router()

router.post('/login',loginUser)
router.post('/signup',signupUser)
router.post('/forgottenpassword',forgottenPassword)
router.post('/resetpassword',resetpassword)
router.post('/adminlogin',adminLogin)
module.exports=router