const User=require('../models/user');

exports.loginUser=async(req,res)=>{
    res.status(200);
    res.json({ "message": "This route is working" });
}

exports.signup=async(req,res)=>{
    res.status(200);
    res.json({ "message": "This route is working" });
}

exports.loginAgent=async(req,res)=>{
    res.status(200);
    res.json({ "message": "This route is working" });
}

exports.loginAdmin=async(req,res)=>{
    res.status(200);
    res.json({ "message": "This route is working" });
}