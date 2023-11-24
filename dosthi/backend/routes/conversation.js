const express = require("express");
const { conversation,getConversation } = require("../controllers/conversation");
const router = express.Router();


router.post('/postConversation', conversation)
router.get('/getConversation/:userId', getConversation)


module.exports = router;