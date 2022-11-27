const Agent = require('../models/agent');

exports.login = async (req, res) => {
    //Login as an agent feature
    res.status(200);
    res.json({ "message": "Agent login working fine" });
}

exports.getCurrentThread = async (req, res) => {
    res.status(200);
    res.json({ "message": "Get current thread api" });
}

exports.markResolved = async (req, res) => {
    res.status(200);
    res.json({ "message": "api working fine" });
}
exports.getConversation = async (req, res) => {
    res.status(200);
    res.json({ "message": "api working fine" });
}