const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        default:null
    },
    UID:{
        type:Number,
        required:true
    },
    lastThreadOpened:{
        type:Number,
        required:false,
        default:null
    },
})
module.exports=mongoose.model('User', userSchema);
