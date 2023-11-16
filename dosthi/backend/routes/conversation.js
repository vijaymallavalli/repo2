const express = require("express");
const { conversation,getConversation } = require("../controllers/conversation");
const router = express.Router();


router.post('/con', conversation)
router.get('/:userId', getConversation)


module.exports = router;