const router = require('express').Router();
const passport = require('passport');
const {newConversation, getUserConversations} = require('../controllers/conversationContoller')

router.route("/createConversation").post(newConversation)
router.route("/getUserConversations/:userId").get(getUserConversations)

module.exports = router;