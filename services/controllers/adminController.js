const User=require('../models/user');
const Thread=require('../models/thread');
const Agent=require('../models/thread');

exports.login=async(req,res)=>{
    res.status(200);
    res.json({ "message": "This route is working" });
}

exports.getUnassignedThreads=async(req,res)=>{
    res.status(200);
    res.json({ "message": "This route is working" });
}


exports.getConversationOfAThread=async(req,res)=>{
    res.status(200);
    res.json({ "message": "This route is working" });
}