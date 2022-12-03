const mongoose = require("mongoose");
const threadSchema = new mongoose.Schema({
  threadId: {
    type: Number,
    required: true,
  },
  topic: {
    type: String,
    required: true,
  },
  priority: {
    type: Number,
    required: true,
    default: 5,
  },
  openedBy: {
    type: Number,
    required: true,
  },
  assignedTo: {
    type: String,
    required: false,
    default: null,
  },
  isResolved: {
    type: Boolean,
    required: true,
    default: false,
  },
  inProgress: {
    type: Boolean,
    required: true,
    default: false,
  },
  inQueue:{
    type:Boolean,
    required:true,
    default:true,
  },
  conversation: [
    {
      message:String,
      isUser:Boolean,
    },
  ],
});

module.exports=mongoose.model('Thread', threadSchema);
