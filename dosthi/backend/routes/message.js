const express = require("express");
const {message} = require("../controllers/message");

const router = express.Router();

router.post('/Mes',message);



module.exports = router;