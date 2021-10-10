const router = require("express").Router();
const passport = require("passport");
const {
  newMessage,
  getMessagesOfaConversation,
} = require("../controllers/messageController");

router.route("/newMessage").post(newMessage);
router.route("/getMessages/:conversationId").get(getMessagesOfaConversation);

module.exports = router;
