const Conversation = require("../models/conversationModel");

exports.newConversation = async (req, res) => {
  const { senderId, receiverId } = req.body;
  try {
    const conversation = await Conversation.create({
      members: [senderId, receiverId],
    });
    res.send({ success: true, response: conversation });
  } catch (err) {
    res.send({ success: false, err: err.message });
  }
};

exports.getUserConversations = async (req, res) => {
  try {
    const conversations = await Conversation.find({
      members: { $in: [req.params.userId] },
    });
    res.send({ success: true, response: conversations });
  } catch (err) {
    res.send({ success: false, message: err.message });
  }
};
