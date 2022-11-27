const Thread=require('../models/thread');


const getThreadWithHighestPriority=async()=>{
    console.log("returns thread of highest priority");
}

exports.createThread=async(req,res)=>{
    res.status(200);
    res.json({ "message": "This route is working" });
}

exports.reopenOldThread=async(req,res)=>{
    res.status(200);
    res.json({ "message": "This route is working" });
}

exports.assignThreadToAgent=async(req,res)=>{
    res.status(200);
    res.json({ "message": "This route is working" });
}


