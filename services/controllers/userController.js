// const user_dao=require('../dao/user_dao.js');
const User = require('../models/user');
exports.userHome = async (req, res) => {
    //This api would be  home route for the user service
    res.json({ "status": 200, "message": "User microservice up and running" });
};

exports.signup = async (req, res) => {
    let message;
    const userObject = {
        name: req.body.name,
        password: req.body.password,
        username: req.body.username,
        email: req.body.email,
        UID: req.body.UID,
        lastThreadOpened: req.body.lastThreadOpened,
    }
    try {
        message = await User.create(userObject);
        res.status(200);
        res.json({ "message": "User created" });
    }
    catch (err) {
        console.log(err);
        res.status(401);
        res.json({ "message": err });
    }
};

exports.login = async (req, res) => {
    res.status(200);
    res.json({ "message": "This route is working" });
};

exports.openNewThread = async (req, res) => {
    res.status(200);
    res.json({ "message": "This route is working" });
};

exports.reopenOldThread = async (req, res) => {
    res.status(200);
    res.json({ "message": "This route is working" });
};