const mongoose=require('mongoose');
const agentSchema=new mongoose.Schema({
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
    UID:{
        type:Number,
        required:true
    },
    currentThread:{
        type:Number,
        required:false,
        default:null
    },
})
module.exports=mongoose.model('Agent', agentSchema);
