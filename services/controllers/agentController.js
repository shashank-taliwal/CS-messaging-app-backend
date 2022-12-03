const Agent = require('../models/agent');
let userIds = [300];

const getAgentId = () => {
    let n = userIds.length;
    let lastUserId = userIds[n - 1];
    let nextId = lastUserId + 1;
    userIds.push(nextId);
    return nextId;
};

exports.signup = async (req, res) => {
    let message;
    let UID = getAgentId();
    console.log(req);
    const AgentObject = {
        name: req.body.name,
        password: req.body.password,
        username: req.body.username,
        email: req.body.email,
        UID: UID,
    };
    console.log(AgentObject);
    console.log("--------------------------------------------------------");
    try {
        let message = await Agent.create(AgentObject);
        res.status(200);
        console.log(message);
        res.json({ message: "Agent created", data: message });
    } catch (err) {
        console.log(err);
        res.status(401);
        res.json({ message: err });
    }
};

exports.login = async (req, res) => {
    const username = req.body.username;
    const pass = req.body.password;
    console.log(username);
    console.log(pass);
    let user = await Agent.findOne({
        username: username,
    }).lean();
    console.log(user);
    if (user.password === pass) {
        res.status(200);
        res.json({ message: "logged in", data:user });
    } else {
        res.status(401);
        res.json({ message: "Invalid credentials" });
    }
};

exports.getCurrentThread = async (req, res) => {
    let agent_id = req.body.agent_id;
    try {
        let assignedThread = await Thread.find({ assignedTo: agent_id, inProgress: true }).lean();
        res.status(200);
        res.json({ "message": assignedThread });
    } catch (err) {
        res.status(401);
        res.json({ "error": err });
    }
}

exports.markResolved = async (req, res) => {
    let agent_id = req.body.agent_id;
    let thread_id = req.body.thread_id;
    try {
        let assignedThread = await Thread.update({ thread_id: thread_id, assignedTo: agent_id }, {
            $set: {
                isResolved: true,
                inProgress: false,
                inQueue: false
            }
        });

        res.status(200);
        res.json({ "message": "Thread resolved" });
    }
    catch (err) {
        res.status(401);
        res.json({ "error": err });
    }
}
exports.getConversation = async (req, res) => {
    let thread_id = req.body.thread_id;
    try {
        let thread = await Thread.find({ thread_id: thread_id }).lean();
        let convo = thread.conversation;
        res.status(200);
        res.json({ "conversation": conversation });
    } catch (err) {
        res.status(401);
        res.json({ "error": err });
    }
}