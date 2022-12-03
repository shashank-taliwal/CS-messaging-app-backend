const Thread = require('../models/thread');
let threadIds = [200];

const getThreadId = () => {
    let n = threadIds.length;
    let lastThreadId = threadIds[n - 1];
    let nextId = lastThreadId + 1;
    threadIds.push(nextId);
    return nextId;
}
const getThreadWithHighestPriority = async () => {
    console.log("returns thread of highest priority");
}

exports.createThread = async (req, res) => {
    let user = req.body.user;
    let topic = req.body.topic;
    let message = req.body.message;
    let convo = [];
    convo.push({
        "message": message,
        "isUser": true
    });
    try {
        let new_thread = await Thread.create({
            threadId: getThreadId(),
            topic: topic,
            openedBy: user,
            conversation: convo
        });
        res.status(200);
        res.json({ "message": "Thread created" })
    } catch (err) {
        res.status(404);
        res.json({ "error": err });
    }
}

exports.assignThreadToAgent = async (req, res) => {

    //WIP
    let current_highest_priority = 0;
    let result;
    try {
        let unAssignedThreads = await Thread.find({ "inQueue": true }).lean();
        for (let thread of unAssignedThreads) {
            if (thread.priority > current_highest_priority) {
                current_highest_priority = thread.priority;
                result = thread;
            }
        }
        res.status(200);
        res.json({ message: unAssignedThreads });
    } catch (err) {
        res.status(401);
        res.json({ "error": err });
    }
}


