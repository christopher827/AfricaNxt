const mongoose=require("mongoose")
const userDataSchema=new mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    technology:{
        type:String,
        required:true
    }
})
//Specified the collection name(usersData) and the model definition
const dataModel=mongoose.model("usersData",userDataSchema)
module.exports=dataModel