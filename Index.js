require('dotenv').config()
const express=require('express')
const cors=require('cors')
const mongoose=require('mongoose')
const app=express()
const userRoutes=require('./routes/user')
const userDataRoutes=require("./routes/usersData")
app.use(cors())
app.use(express.json())
mongoose.connect(process.env.MONGODB_URL)

app.use('/api/user',userRoutes)
app.use('/api/userData',userDataRoutes)

app.listen(process.env.PORT,()=>{
    console.log("Server is Running")
})