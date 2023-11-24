const express = require("express");
const {message,getMessage} = require("../controllers/message");
const router = express.Router();

router.post('/postMessage',message);
router.get('/getMessage/:conversationId',getMessage)



module.exports = router;